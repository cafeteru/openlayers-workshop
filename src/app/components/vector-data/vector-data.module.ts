import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VectorDataRoutingModule } from './vector-data-routing.module';
import { RenderJsonComponent } from './render-json/render-json.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ModifyingFeaturesComponent } from './modifying-features/modifying-features.component';
import { DrawingNewFeaturesComponent } from './drawing-new-features/drawing-new-features.component';
import { SnappingComponent } from './snapping/snapping.component';
import { DownloadingFeaturesComponent } from './downloading-features/downloading-features.component';



@NgModule({
  declarations: [
    RenderJsonComponent,
    DragDropComponent,
    ModifyingFeaturesComponent,
    DrawingNewFeaturesComponent,
    SnappingComponent,
    DownloadingFeaturesComponent,
  ],
  imports: [
    VectorDataRoutingModule,
    CommonModule
  ]
})
export class VectorDataModule { }
