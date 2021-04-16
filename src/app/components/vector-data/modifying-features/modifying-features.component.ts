import { Component, OnInit } from '@angular/core';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import Modify from 'ol/interaction/Modify';
// @ts-ignore
import sync from 'ol-hashed';
import DragAndDrop from 'ol/interaction/DragAndDrop';

@Component({
  selector: 'app-modifying-features',
  templateUrl: './modifying-features.component.html',
  styleUrls: ['./modifying-features.component.scss']
})
export class ModifyingFeaturesComponent implements OnInit {

  map = new Map({});

  constructor() { }

  ngOnInit(): void {
    this.map = new Map({
      target: 'map-container3',
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
    sync(this.map);
    const source = new VectorSource();
    const layer = new VectorLayer({source});
    this.map.addLayer(layer);
    this.map.addInteraction(new DragAndDrop({
      source,
      formatConstructors: [GeoJSON as any]
    }));
    this.map.addInteraction(new Modify({
      source
    }));
  }


}
