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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule {
}
