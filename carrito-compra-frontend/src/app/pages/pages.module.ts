import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [HomeComponent, CarritoComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
