import { Component, OnDestroy, OnInit } from '@angular/core';
import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';
import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { Stamen, Vector as VectorSource } from 'ol/source';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map-setup',
  templateUrl: './map-setup.component.html',
  styleUrls: ['./map-setup.component.scss']
})
export class MapSetupComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  map: Map;
  private source: VectorSource;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.createMap();
    this.getDataCsv();
  }

  private createMap(): void {
    this.source = new VectorSource();
    this.map = new Map({
      target: 'map-container-gl',
      layers: [
        new TileLayer({
          source: new Stamen({
            layer: 'toner'
          })
        }),
        new VectorLayer({
          source: this.source
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
  }

  private getDataCsv(): void {
    this.subscriptions.push(
      this.httpClient.get('assets/data/meteorites.csv', {responseType: 'text'})
        .subscribe(data => {
          const features = [];
          const lines = data.split('\n');
          lines.forEach(line => {
            const elementsLine = line.split(',');
            const coords = fromLonLat([parseFloat(elementsLine[4]), parseFloat(elementsLine[3])]);
            if (!isNaN(coords[0]) && !isNaN(coords[1])) {
              features.push(
                new Feature({
                  mass: parseFloat(elementsLine[1]) || 0,
                  year: parseInt(elementsLine[2], 0) || 0,
                  geometry: new Point(coords)
                })
              );
            }
          });
          this.source.addFeatures(features);
        })
    );
  }
}
