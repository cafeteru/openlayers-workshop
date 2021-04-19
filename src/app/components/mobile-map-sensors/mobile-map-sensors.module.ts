import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileMapComponent } from './mobile-map/mobile-map.component';
import { MobileMapSensorsRoutingModule } from './mobile-map-sensors-routing.module';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { CompassComponent } from './compass/compass.component';


@NgModule({
  declarations: [
    MobileMapComponent,
    GeolocationComponent,
    CompassComponent
  ],
  imports: [
    MobileMapSensorsRoutingModule,
    CommonModule
  ]
})
export class MobileMapSensorsModule {
}
