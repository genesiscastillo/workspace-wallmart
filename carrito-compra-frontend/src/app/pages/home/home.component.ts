import { Component, HostListener, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from '../../services/productos.service';
import { CarritoCompraService } from '../../services/carrito-compra.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public INCREMENTAR_PRODUCTO:number = 1;
  public DECREMENTAR_PRODUCTO:number = -1;
  public productos: Producto[] = []

  constructor(private productosService: ProductosService,private carritoCompraService: CarritoCompraService) { }

  ngOnInit(): void {

    this.productosService.getProductos()
    .subscribe( resp => {
      resp.forEach( producto => {
        let productoTemp = this.carritoCompraService.carritoCompra.productoSeleccionado.find(this.carritoCompraService.findIndexToUpdate, producto.id);
        if(productoTemp){
          producto.amount = productoTemp.amount;
          producto.total = productoTemp.total;
        }else{
            producto.amount = 0;
            producto.total = 0;
          }
        this.productos.push(producto);
      });
    })
  }

  agregarProducto( producto: Producto )  {
      this.carritoCompraService.operarProducto(producto , this.INCREMENTAR_PRODUCTO);
  }

  quitarProducto( producto: Producto){
    if( producto.amount > 0 ){    
      this.carritoCompraService.operarProducto(producto , this.DECREMENTAR_PRODUCTO);
    }
  }

}
