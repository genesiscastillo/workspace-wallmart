import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { ProductosPosterGridComponent } from './productos-poster-grid/productos-poster-grid.component';

@NgModule({
  declarations: [
    NavbarComponent, 
    ProductosPosterGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    ProductosPosterGridComponent
  ]
})
export class ComponentsModule { }
