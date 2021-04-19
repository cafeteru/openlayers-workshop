import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VectorTileComponent } from './vector-tile/vector-tile.component';
import { VectorTileMapboxRoutingModule } from './vector-tile-mapbox-routing.module';
import { MapboxComponent } from './mapbox/mapbox.component';
import { InteractiveComponent } from './interactive/interactive.component';


@NgModule({
  declarations: [
    VectorTileComponent,
    MapboxComponent,
    InteractiveComponent
  ],
  imports: [
    VectorTileMapboxRoutingModule,
    CommonModule
  ]
})
export class VectorTileMapboxModule {
}
