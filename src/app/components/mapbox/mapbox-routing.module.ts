import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VectorTileComponent } from './vector-tile/vector-tile.component';


const routes: Routes = [
    {
        path: 'vectorTile',
        component: VectorTileComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapboxRoutingModule {
}
