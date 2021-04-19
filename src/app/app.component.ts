import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import * as fileSaver from 'file-saver';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  isCollapsed = false;
  subscriptions: Subscription[] = [];

  constructor(
    private httpClient: HttpClient
  ) {
  }

  download(): void {
    this.subscriptions.push(
      this.httpClient.get('assets/data/countries.json', { responseType: 'text' })
        .subscribe(data => {
          const blob = new Blob([data], { type: 'text/json;charset=utf-8' });
          fileSaver.saveAs(blob, 'countries.json');
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }
}
