import { Component, OnInit } from '@angular/core';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSMSource from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import { circular } from 'ol/geom/Polygon';
import Point from 'ol/geom/Point';


@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent implements OnInit {
  private map: Map;
  private source: VectorSource;

  constructor() {
  }

  ngOnInit(): void {
    this.map = new Map({
      target: 'map-container-mobile2',
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
    this.map.addLayer(layer);
    this.showUserPosition(this.source);
  }

  moveToPosition(): void {
    if (!this.source.isEmpty()) {
      this.map.getView().fit(this.source.getExtent(), {
        maxZoom: 18,
        duration: 500
      });
    }
  }

  private showUserPosition(source: VectorSource): void {
    const options = {
      enableHighAccuracy: true
    };
    navigator.geolocation.watchPosition(
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
