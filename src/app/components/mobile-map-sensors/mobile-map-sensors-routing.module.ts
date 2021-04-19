import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileMapComponent } from './mobile-map/mobile-map.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { CompassComponent } from './compass/compass.component';


const routes: Routes = [
    {
        path: 'mobileMap',
        component: MobileMapComponent,
    },
    {
        path: 'geolocation',
        component: GeolocationComponent,
    },
    {
        path: 'compass',
        component: CompassComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MobileMapSensorsRoutingModule {
}
