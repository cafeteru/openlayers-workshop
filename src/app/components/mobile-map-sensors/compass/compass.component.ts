import { Component, OnDestroy, OnInit } from '@angular/core';
import { Map, View } from 'ol';
import VectorSource from 'ol/source/Vector';
import TileLayer from 'ol/layer/Tile';
import OSMSource from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import { circular } from 'ol/geom/Polygon';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Fill, Icon, Style } from 'ol/style';
import Kompas from 'kompas';

@Component({
  selector: 'app-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.scss']
})
export class CompassComponent implements OnInit, OnDestroy {
  private map: Map;
  private source: VectorSource;
  private compass: Kompas;
  private id: number;

  constructor() {
  }

  ngOnDestroy(): void {
    navigator.geolocation.clearWatch(this.id);
  }

  ngOnInit(): void {
    this.map = new Map({
      target: 'map-container-mobile3',
      layers: [
        new TileLayer({
          source: new OSMSource()
        })
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2
      })
    });

    this.source = new VectorSource();
    const layer = new VectorLayer({source: this.source});
    this.addStyleLayer(layer);
    this.map.addLayer(layer);
    this.id = this.createSubscriptionUserPosition(this.source);
  }

  moveToPosition(): void {
    if (!this.source.isEmpty()) {
      this.map.getView().fit(this.source.getExtent(), {
        maxZoom: 18,
        duration: 500
      });
    }
  }

  private addStyleLayer(layer: VectorLayer): void {
    const style = new Style({
      fill: new Fill({
        color: 'rgba(0, 0, 255, 0.2)'
      }),
      image: new Icon({
        src: 'assets/data/location-heading.svg',
        imgSize: [27, 55],
        rotateWithView: true
      })
    });
    this.compass = new Kompas();
    this.compass.watch();
    this.compass.on('heading', (heading) => {
      style.getImage().setRotation(Math.PI / 180 * heading);
    });
    layer.setStyle(style);
  }

  private createSubscriptionUserPosition(source: VectorSource): number {
    const options = {
      enableHighAccuracy: true
    };
    return navigator.geolocation.watchPosition(
      (pos: GeolocationPosition) => {
        const coords = [pos.coords.longitude, pos.coords.latitude];
        const accuracy = circular(coords, pos.coords.accuracy);
        source.clear(true);
        source.addFeatures([
          new Feature(accuracy.transform('EPSG:4326', this.map.getView().getProjection())),
          new Feature(new Point(fromLonLat(coords)))
        ]);
      },
      (error: GeolocationPositionError) => {
        alert(`ERROR: ${error.message}`);
      },
      options
    );
  }
}
