import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileMapComponent } from './mobile-map/mobile-map.component';


const routes: Routes = [
    {
        path: 'mobileMap',
        component: MobileMapComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MobileMapSensorsRoutingModule {
}
