import { Component, OnInit } from '@angular/core';
import TileLayer from 'ol/layer/Tile';
import Map from 'ol/Map';
import * as olProj from 'ol/proj';
import XYZSource from 'ol/source/XYZ';
import View from 'ol/View';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  map = new Map({});

  constructor() { }

  ngOnInit(): void {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZSource({
            url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
          })
        })
      ],
      view: new View({
        center: olProj.fromLonLat([0, 0]),
        zoom: 2
      })
    });
  }

}
