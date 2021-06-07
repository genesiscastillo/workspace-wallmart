import { Producto } from './producto';
export class CarritoCompra {

    productoSeleccionado: Producto[] = [];
    mensajeAgregarMarca:String[] = [];
    mensajeDescuentoAplicado:String[] = []; 
    subTotal: Number = 0;
    descuentoPorMarca: Number = 0;
    totalPagar: Number = 0;
}
