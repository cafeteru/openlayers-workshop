import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapSetupComponent } from './map-setup/map-setup.component';
import { ElevationDataComponent } from './elevation-data/elevation-data.component';
import { SeaLevelComponent } from './sea-level/sea-level.component';


const routes: Routes = [
    {
        path: 'mapSetup',
        component: MapSetupComponent,
    },
    {
        path: 'elevationData',
        component: ElevationDataComponent,
    },
    {
        path: 'seaLevel',
        component: SeaLevelComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RasterRoutingModule {
}
