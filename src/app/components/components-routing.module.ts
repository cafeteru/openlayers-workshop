import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
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
