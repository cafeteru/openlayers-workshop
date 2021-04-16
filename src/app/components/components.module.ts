import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BasicComponent } from './basic/basic.component';
import { ComponentsRoutingModule } from './components-routing.module';



@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    ComponentsRoutingModule,
    CommonModule
  ]
})
export class ComponentsModule { }
