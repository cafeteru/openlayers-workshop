import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Feature, Map } from 'ol';
import { HttpClient } from '@angular/common/http';
import { apply } from 'ol-mapbox-style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Stroke, Style } from 'ol/style';
import { fromExtent } from 'ol/geom/Polygon';

@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.scss']
})
export class InteractiveComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private map: Map;
  private vectorLayer: VectorLayer;
  private source: VectorSource;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.httpClient.get('assets/data/bright.json', {responseType: 'json'})
        .subscribe(data => {
          this.map = apply('map-container-tile3', data);
          this.source = new VectorSource();
          this.vectorLayer = new VectorLayer({
            map: this.map,
            source: this.source,
            style: new Style({
              stroke: new Stroke({
                color: 'red',
                width: 4
              })
            })
          });
          this.map.on('pointermove', (event) => {
            this.source.clear();
            this.map.forEachFeatureAtPixel(event.pixel, (feature) => {
              const geometry = feature.getGeometry();
              this.source.addFeature(new Feature(fromExtent(geometry.getExtent())));
            }, {
              hitTolerance: 2
            });
          });
        })
    );
  }

}
