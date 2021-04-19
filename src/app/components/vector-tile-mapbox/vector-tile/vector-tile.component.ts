import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import { Map, View } from 'ol';
import MVT from 'ol/format/MVT';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import { fromLonLat } from 'ol/proj';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-vector-tile',
  templateUrl: './vector-tile.component.html',
  styleUrls: ['./vector-tile.component.scss']
})
export class VectorTileComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const map = new Map({
      target: 'map-container-tile',
      view: new View({
        center: fromLonLat([-117.1625, 32.715]),
        zoom: 6
      })
    });
    const layer = new VectorTileLayer({
      source: new VectorTileSource({
        attributions: [
          '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a>',
          '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        ],
        format: new MVT(),
        url: `https://api.maptiler.com/tiles/v3/{z}/{x}/{y}.pbf?key=${environment.maptile_token}`,
        maxZoom: 14
      })
    });
    map.addLayer(layer);
  }

}
