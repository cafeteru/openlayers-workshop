import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



export const rootRoutes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./components/components.module').then(
                (c) => c.ComponentsModule
            ),
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(rootRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
