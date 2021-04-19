import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import XYZSource from 'ol/source/XYZ';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-elevation-data',
  templateUrl: './elevation-data.component.html',
  styleUrls: ['./elevation-data.component.scss']
})
export class ElevationDataComponent implements OnInit {
  private map: Map;

  constructor() {
  }

  ngOnInit(): void {
    const elevation = new XYZSource({
      url: 'https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=' + environment.mapbox_token,
      crossOrigin: 'anonymous'
    });
    this.map = new Map({
      target: 'map-container-raster2',
      layers: [
        new TileLayer({
          opacity: 0.8,
          source: elevation
        })
      ],
      view: new View({
        center: fromLonLat([-117.1493, 32.6965]),
        zoom: 12
      })
    });
  }
}
