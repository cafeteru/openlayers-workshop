import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { RenderJsonComponent } from './render-json/render-json.component';

const routes: Routes = [
    {
        path: '',
        component: BasicComponent,
    },
    {
        path: 'renderJSON',
        component: RenderJsonComponent,
    },
    {
        path: 'dragDrop',
        component: DragDropComponent,
    },
    {
        path: 'basic',
        component: BasicComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule {
}
