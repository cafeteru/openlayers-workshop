import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicComponent } from './basic/basic.component';

const routes: Routes = [
    {
        path: '',
        component: BasicComponent,
    },
    {
        path: 'vectorData',
        loadChildren: () =>
          import('./vector-data/vector-data.module').then(
            (v) => v.VectorDataModule
          ),
    },
    {
        path: 'mobileMapSensors',
        loadChildren: () =>
          import('./mobile-map-sensors/mobile-map-sensors.module').then(
            (m) => m.MobileMapSensorsModule
          ),
    },
    {
        path: 'webGL',
        loadChildren: () =>
          import('./web-gl/web-gl.module').then(
            (w) => w.WebGLModule
          ),
    },
    {
        path: 'vectorTileMapbox',
        loadChildren: () =>
          import('./vector-tile-mapbox/vector-tile-mapbox.module').then(
            (m) => m.VectorTileMapboxModule
          ),
    },
    {
        path: 'raster',
        loadChildren: () =>
          import('./raster/raster-routing.module').then(
            (r) => r.RasterRoutingModule
          ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule {
}
