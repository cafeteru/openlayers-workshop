import { Component, OnDestroy, OnInit } from '@angular/core';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View'
import DragAndDrop from 'ol/interaction/DragAndDrop';
import Draw from 'ol/interaction/Draw';
import GeometryType from 'ol/geom/GeometryType';

@Component({
  selector: 'app-drawing-new-features',
  templateUrl: './drawing-new-features.component.html',
  styleUrls: ['./drawing-new-features.component.scss']
})
export class DrawingNewFeaturesComponent implements OnInit, OnDestroy {

  map = new Map({});
  layer: VectorLayer;

  constructor() { }

  ngOnInit(): void {
    this.map = new Map({
      target: 'map-container4',
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
    const source = new VectorSource();
    this.layer = new VectorLayer({ source });
    this.map.addLayer(this.layer);
    this.map.addInteraction(new DragAndDrop({
      source,
      formatConstructors: [GeoJSON as any]
    }));
    this.map.addInteraction(new Draw({
      type: GeometryType.POLYGON,
      source
    }));
  }

  ngOnDestroy(): void {
    this.map.removeLayer(this.layer);
  }

}
