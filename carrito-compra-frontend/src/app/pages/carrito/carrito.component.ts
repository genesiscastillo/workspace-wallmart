import { Component, OnInit } from '@angular/core';
import { CarritoCompra } from 'src/app/interfaces/carritoCompra';
import { CarritoCompraService } from '../../services/carrito-compra.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public INCREMENTAR_PRODUCTO:number = 1;
  public DECREMENTAR_PRODUCTO:number = -1;

  public carritoCompra: CarritoCompra = new CarritoCompra();
  constructor(public carritoCompraService: CarritoCompraService , private route: Router) { }

  ngOnInit(): void {
    this.carritoCompra =  this.carritoCompraService.obtenerCarritoCompra();
  }

  irAproductos(){
    this.route.navigate(['/home']);
  }
}
