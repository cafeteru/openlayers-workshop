import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VectorTileComponent } from './vector-tile/vector-tile.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { InteractiveComponent } from './interactive/interactive.component';


const routes: Routes = [
    {
        path: 'vectorTile',
        component: VectorTileComponent,
    },
    {
        path: 'mapbox',
        component: MapboxComponent,
    },
    {
        path: 'interactive',
        component: InteractiveComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VectorTileMapboxRoutingModule {
}
