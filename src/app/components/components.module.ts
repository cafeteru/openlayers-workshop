import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    BasicComponent,
    MenuComponent
  ],
  imports: [
    ComponentsRoutingModule,
    CommonModule
  ]
})
export class ComponentsModule { }
