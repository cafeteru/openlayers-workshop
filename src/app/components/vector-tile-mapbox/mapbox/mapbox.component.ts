import { Component, OnDestroy, OnInit } from '@angular/core';
import 'ol/ol.css';
import { apply } from 'ol-mapbox-style';
import { Map } from 'ol';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private map: Map;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.httpClient.get('assets/data/bright.json', {responseType: 'json'})
        .subscribe(data => {
          this.map = apply('map-container-tile2', data);
        })
    );
  }

}
