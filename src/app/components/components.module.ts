import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BasicComponent } from './basic/basic.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { MenuComponent } from './menu/menu.component';
import { Menu2Component } from './menu2/menu2.component';



@NgModule({
  declarations: [
    BasicComponent,
    MenuComponent,
    Menu2Component,
  ],
  imports: [
    ComponentsRoutingModule,
    CommonModule
  ]
})
export class ComponentsModule { }
