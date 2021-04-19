import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapSetupComponent } from './map-setup/map-setup.component';
import { RenderingPointsComponent } from './rendering-points/rendering-points.component';


const routes: Routes = [
    {
        path: 'mapSetup',
        component: MapSetupComponent,
    },
    {
        path: 'rendering',
        component: RenderingPointsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebGLRoutingModule {
}
