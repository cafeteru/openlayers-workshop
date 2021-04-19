import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import XYZSource from 'ol/source/XYZ';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import RasterSource from 'ol/source/Raster';
import { environment } from '../../../../environments/environment';
import ImageLayer from 'ol/layer/Image';

@Component({
  selector: 'app-sea-level',
  templateUrl: './sea-level.component.html',
  styleUrls: ['./sea-level.component.scss']
})
export class SeaLevelComponent implements OnInit {
  private map: Map;

  constructor() {
  }

  ngOnInit(): void {
    const elevation = new XYZSource({
      url: 'https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=' + environment.mapbox_token,
      crossOrigin: 'anonymous'
    });
    const raster = new RasterSource({
      sources: [elevation],
      operation: (pixels: any, data: any) => {
        const pixel = pixels[0];
        if (pixel[3]) {
          // decode R, G, B values as elevation
          const height = -10000 + ((pixel[0] * 256 * 256 + pixel[1] * 256 + pixel[2]) * 0.1);
          if (height <= Number(data.level)) {
            // sea blue
            pixel[0] = 145; // red
            pixel[1] = 175; // green
            pixel[2] = 186; // blue
            pixel[3] = 255; // alpha
          } else {
            // transparent
            pixel[3] = 0;
          }
        }
        return pixel;
      }
    });
    this.map = new Map({
      target: 'map-container-raster3',
      layers: [
        new ImageLayer({
          opacity: 0.8,
          source: raster
        }),
        new TileLayer({
          opacity: 0.8,
          source: elevation
        })
      ],
      view: new View({
        center: fromLonLat([-117.1493, 32.6965]),
        zoom: 12
      }),
    });
    this.changeSeaLevel(raster);
  }

  changeSeaLevel(raster): void {
    const control: any = document.getElementById('level');
    const output = document.getElementById('output');
    control.addEventListener('input', () => {
      output.innerText = control.value;
      raster.changed();
    });
    output.innerText = control.value;
    raster.on('beforeoperations', (event) => {
      event.data.level = control.value;
    });
  }

}
