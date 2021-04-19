import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VectorTileComponent } from './vector-tile/vector-tile.component';
import { MapboxRoutingModule } from './mapbox-routing.module';


@NgModule({
  declarations: [
    VectorTileComponent
  ],
  imports: [
    MapboxRoutingModule,
    CommonModule
  ]
})
export class MapboxModule {
}
