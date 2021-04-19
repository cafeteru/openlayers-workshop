import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSMSource from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-mobile-map',
  templateUrl: './mobile-map.component.html',
  styleUrls: ['./mobile-map.component.scss']
})
export class MobileMapComponent implements OnInit {
  private map: Map;

  constructor() {
  }

  ngOnInit(): void {
    this.map = new Map({
      target: 'map-container-mobile1',
      layers: [
        new TileLayer({
          source: new OSMSource()
        })
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2
      })
    });
  }

}
