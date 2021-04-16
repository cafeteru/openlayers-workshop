import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VectorDataRoutingModule } from './vector-data-routing.module';
import { RenderJsonComponent } from './render-json/render-json.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';



@NgModule({
  declarations: [
    RenderJsonComponent,
    DragDropComponent,
  ],
  imports: [
    VectorDataRoutingModule,
    CommonModule
  ]
})
export class VectorDataModule { }
