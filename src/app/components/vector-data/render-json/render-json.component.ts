import 'ol/ol.css';

import { Component, OnInit } from '@angular/core';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';


@Component({
  selector: 'app-render-json',
  templateUrl: './render-json.component.html',
  styleUrls: ['./render-json.component.scss']
})
export class RenderJsonComponent implements OnInit {
  private map = new Map({});

  constructor() { }

  ngOnInit(): void {
    this.map = new Map({
      target: 'map-container',
      layers: [
        new VectorLayer({
          source: new VectorSource({
            format: new GeoJSON(),
            url: '../../../assets/data/countries.json'
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
  }

}
