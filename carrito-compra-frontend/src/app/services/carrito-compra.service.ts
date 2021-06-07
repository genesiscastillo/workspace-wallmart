import { Injectable } from '@angular/core';
import { CarritoCompra } from '../interfaces/carritoCompra';
import { Descuento } from '../interfaces/descuento';
import { Producto } from '../interfaces/producto';
import { DescuentoService } from './descuento.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoCompraService {

  public carritoCompra: CarritoCompra = new CarritoCompra();
  public descuentos: Descuento[] = [];
  constructor(private descuentoService: DescuentoService) { 

    console.log('CarritoCompraService.. load');
    this.descuentoService.getDescuentos()
    .subscribe( resp =>{
      this.descuentos = resp;
    })
  }

  obtenerCarritoCompra():CarritoCompra {
    return this.carritoCompra;
  }

  async operarProducto(producto: Producto , operador: Number)  {
    let productoTemp = this.carritoCompra.productoSeleccionado.find(this.findIndexToUpdate, producto.id);
    return new Promise((resolve, reject)=>{
      if(productoTemp){
        let index = this.carritoCompra.productoSeleccionado.indexOf(productoTemp);
        productoTemp.amount = productoTemp.amount + Number(operador);
        if(productoTemp.amount === 0){
          delete this.carritoCompra.productoSeleccionado[index];
          this.carritoCompra.productoSeleccionado = this.carritoCompra.productoSeleccionado.filter(item => item);
        }else{
          productoTemp.total = productoTemp.amount * productoTemp.price;
          this.carritoCompra.productoSeleccionado[index] = productoTemp;
        }
      }else{
        producto.amount = 1;
        producto.total = producto.price;
        this.carritoCompra.productoSeleccionado.push(producto);
      }
      this.actualizarCarritoCompra();
    });
  }

  findIndexToUpdate(producto) { 
    return producto.id === this;
}

  async actualizarCarritoCompra(){
    return new Promise((resolve, reject)=>{
      this.carritoCompra.mensajeAgregarMarca = [];
      this.carritoCompra.mensajeDescuentoAplicado = [];
      this.carritoCompra.subTotal = Object.values(this.carritoCompra.productoSeleccionado).reduce((total, {price}) => total + price, 0);
      var totalPagar:Number = this.carritoCompra.subTotal;
      var descuentoPorMarca:Number = 0;
  
      this.descuentos.forEach((descuento,index)=>{
        const productosPorMarca = Object.values(this.carritoCompra.productoSeleccionado).filter( prod => prod.brand === descuento.brand);  
        if(productosPorMarca.length > 0 ){
          let precioTotalPorMarca = Object.values(productosPorMarca).reduce((t, {total}) => t + total, 0);
          let diferencia:Number = Number(descuento.threshold) - Number(precioTotalPorMarca);
          if( diferencia > 0){
            let mensajeAgregar = `Agrega ${diferencia} mas en productos ${descuento.brand} y aprovecha un descuento total de ${descuento.discount} en tu compra!`;
            this.carritoCompra.mensajeAgregarMarca.push( mensajeAgregar);
          }else {
            let mensajeAplicado = `Se aplicó un descuento de ${descuento.discount} por haber comprado al menos ${descuento.threshold} en productos ${descuento.brand}!`;
            this.carritoCompra.mensajeDescuentoAplicado.push( mensajeAplicado );
            totalPagar = Number(totalPagar) - Number(descuento.discount);
            descuentoPorMarca = Number(descuentoPorMarca) + Number(descuento.discount);
          }
        }
      });
      this.carritoCompra.descuentoPorMarca = descuentoPorMarca;
      this.carritoCompra.totalPagar = totalPagar;
      
      this.log(this.carritoCompra);
      resolve();
    });
  }

  log(obj) {
    return console.log(JSON.stringify(obj, null, " "));
  }

}
