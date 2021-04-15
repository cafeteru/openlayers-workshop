import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BasicComponent } from './basic/basic.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { RenderJsonComponent } from './render-json/render-json.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';



@NgModule({
  declarations: [
    BasicComponent,
    RenderJsonComponent,
    DragDropComponent,
  ],
  imports: [
    ComponentsRoutingModule,
    CommonModule
  ]
})
export class ComponentsModule { }
