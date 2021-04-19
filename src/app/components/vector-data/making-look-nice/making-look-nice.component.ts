import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import DragAndDrop from 'ol/interaction/DragAndDrop';
import GeoJSON from 'ol/format/GeoJSON';
import Draw from 'ol/interaction/Draw';
import GeometryType from 'ol/geom/GeometryType';
import Snap from 'ol/interaction/Snap';
import { Fill, Stroke, Style } from 'ol/style';


@Component({
  selector: 'app-making-look-nice',
  templateUrl: './making-look-nice.component.html',
  styleUrls: ['./making-look-nice.component.scss']
})
export class MakingLookNiceComponent implements OnInit {
  private map = new Map({});

  constructor() {
  }

  ngOnInit(): void {
    this.map = new Map({
      target: 'map-container7',
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
    const source = new VectorSource();
    const layer = new VectorLayer({
      source,
      style: new Style({
        fill: new Fill({
          color: 'red'
        }),
        stroke: new Stroke({
          color: 'white'
        })
      })
    });
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
