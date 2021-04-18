import { Component, OnInit } from '@angular/core';

import GeoJSON from 'ol/format/GeoJSON';
import DragAndDrop from 'ol/interaction/DragAndDrop';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import Snap from 'ol/interaction/Snap';
import GeometryType from 'ol/geom/GeometryType';
import Draw from 'ol/interaction/Draw';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-downloading-features',
  templateUrl: './downloading-features.component.html',
  styleUrls: ['./downloading-features.component.scss']
})
export class DownloadingFeaturesComponent implements OnInit {
  map = new Map({});
  source: VectorSource;

  constructor() {
  }

  ngOnInit(): void {
    this.map = new Map({
      target: 'map-container6',
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
    this.source = new VectorSource();
    const layer = new VectorLayer({
      source: this.source,
    });
    this.map.addLayer(layer);
    this.map.addInteraction(new DragAndDrop({
      source: this.source,
      formatConstructors: [GeoJSON as any]
    }));
    this.map.addInteraction(new Draw({
      type: GeometryType.POLYGON,
      source: this.source,
    }));
    this.map.addInteraction(new Snap({
      source: this.source,
    }));
  }

  clear(): void {
    this.source.clear();
  }

  download(): void {
    const format = new GeoJSON({ featureProjection: 'EPSG:3857' });
    const features = this.source.getFeatures();
    const json = format.writeFeatures(features);
    const blob = new Blob([json], { type: 'text/json;charset=utf-8' });
    fileSaver.saveAs(blob, 'datos.json');
  }
}
