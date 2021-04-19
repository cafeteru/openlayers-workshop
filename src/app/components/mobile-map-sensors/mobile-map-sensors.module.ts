import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileMapComponent } from './mobile-map/mobile-map.component';
import { MobileMapSensorsRoutingModule } from './mobile-map-sensors-routing.module';


@NgModule({
  declarations: [
    MobileMapComponent
  ],
  imports: [
    MobileMapSensorsRoutingModule,
    CommonModule
  ]
})
export class MobileMapSensorsModule {
}
