import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapSetupComponent } from './map-setup/map-setup.component';


const routes: Routes = [
    {
        path: 'mapSetup',
        component: MapSetupComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebGLRoutingModule {
}
