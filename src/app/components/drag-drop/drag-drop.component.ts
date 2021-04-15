import 'ol/ol.css';

import { Component, OnInit } from '@angular/core';
import sync from 'ol-hashed';
import GeoJSON from 'ol/format/GeoJSON';
import DragAndDrop from 'ol/interaction/DragAndDrop';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';


@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {
  map = new Map({});

  constructor() { }

  ngOnInit(): void {
    this.map = new Map({
      target: 'map-container2',
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
    sync(this.map);
    const source = new VectorSource();
    const layer = new VectorLayer({ source });
    this.map.addLayer(layer);
    this.map.addInteraction(new DragAndDrop({
      source,
      formatConstructors: [GeoJSON as any]
    }));
  }
}

