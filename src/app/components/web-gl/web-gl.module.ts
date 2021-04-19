import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebGLRoutingModule } from './web-gl-routing.module';
import { MapSetupComponent } from './map-setup/map-setup.component';
import { RenderingPointsComponent } from './rendering-points/rendering-points.component';


@NgModule({
  declarations: [
    MapSetupComponent,
    RenderingPointsComponent
  ],
  imports: [
    WebGLRoutingModule,
    CommonModule
  ]
})
export class WebGLModule {
}
