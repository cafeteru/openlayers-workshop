import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapSetupComponent } from './map-setup/map-setup.component';
import { ElevationDataComponent } from './elevation-data/elevation-data.component';
import { SeaLevelComponent } from './sea-level/sea-level.component';



@NgModule({
  declarations: [
    MapSetupComponent,
    ElevationDataComponent,
    SeaLevelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RasterModule { }
