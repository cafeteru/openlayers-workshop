import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Map, View } from 'ol';
import { Stamen, Vector as VectorSource } from 'ol/source';
import { HttpClient } from '@angular/common/http';
import { Tile as TileLayer, WebGLPoints as WebGLPointsLayer } from 'ol/layer';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { SymbolType } from 'ol/style/LiteralStyle';


@Component({
  selector: 'app-rendering-points',
  templateUrl: './rendering-points.component.html',
  styleUrls: ['./rendering-points.component.scss']
})
export class RenderingPointsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private map: Map;
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
      target: 'map-container-gl2',
      layers: [
        new TileLayer({
          source: new Stamen({
            layer: 'toner'
          })
        }),
        new WebGLPointsLayer({
          source: this.source,
          style: {
            symbol: {
              symbolType: SymbolType.CIRCLE,
              size: ['+', ['*', ['clamp', ['*', ['get', 'mass'], 1 / 20000], 0, 1], 18], 8],
              color: 'rgba(255,0,0,0.5)'
            }
          }
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
