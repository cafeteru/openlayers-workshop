import 'ol/ol.css';

import { Component, OnInit } from '@angular/core';

import GeoJSON from 'ol/format/GeoJSON';
import DragAndDrop from 'ol/interaction/DragAndDrop';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import Snap from 'ol/interaction/Snap';
import Modify from 'ol/interaction/Modify';
import GeometryType from 'ol/geom/GeometryType';
import Draw from 'ol/interaction/Draw';

@Component({
  selector: 'app-snapping',
  templateUrl: './snapping.component.html',
  styleUrls: ['./snapping.component.scss']
})
export class SnappingComponent implements OnInit {

  map = new Map({});

  constructor() {
  }

  ngOnInit(): void {
    this.map = new Map({
      target: 'map-container5',
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
    const source = new VectorSource();
    const layer = new VectorLayer({ source });
    this.map.addLayer(layer);
    this.map.addInteraction(new DragAndDrop({
      source,
      formatConstructors: [GeoJSON as any]
    }));
    this.map.addInteraction(new Draw({
      type: GeometryType.POLYGON,
      source
    }));
    this.map.addInteraction(new Snap({
      source
    }));
  }

}
