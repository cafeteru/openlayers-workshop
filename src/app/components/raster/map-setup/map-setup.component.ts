import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZSource from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-map-setup',
  templateUrl: './map-setup.component.html',
  styleUrls: ['./map-setup.component.scss']
})
export class MapSetupComponent implements OnInit {
  private map: Map;

  constructor() {
  }

  ngOnInit(): void {
    this.map = new Map({
      target: 'map-container-raster',
      layers: [
        new TileLayer({
          source: new XYZSource({
            url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
          })
        })
      ],
      view: new View({
        center: fromLonLat([-117.1493, 32.6965]),
        zoom: 12
      })
    });
  }

}
