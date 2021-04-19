import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebGLRoutingModule } from './web-gl-routing.module';
import { MapSetupComponent } from './map-setup/map-setup.component';


@NgModule({
  declarations: [
    MapSetupComponent
  ],
  imports: [
    WebGLRoutingModule,
    CommonModule
  ]
})
export class WebGLModule {
}
