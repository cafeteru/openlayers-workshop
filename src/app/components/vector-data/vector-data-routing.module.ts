import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { RenderJsonComponent } from './render-json/render-json.component';


const routes: Routes = [
    {
        path: 'renderJSON',
        component: RenderJsonComponent,
    },
    {
        path: 'dragDrop',
        component: DragDropComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VectorDataRoutingModule {
}
