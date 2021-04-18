import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicComponent } from './basic/basic.component';

const routes: Routes = [
    {
        path: '',
        component: BasicComponent,
    },
    {
        path: 'vectorData',
        loadChildren: () =>
            import('./vector-data/vector-data.module').then(
                (v) => v.VectorDataModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule {
}
