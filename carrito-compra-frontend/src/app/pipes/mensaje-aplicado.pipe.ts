import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mensajeAplicado'
})
export class MensajeAplicadoPipe implements PipeTransform {

  transform( objMensaje : any): string {
    return `Se aplicó un descuento de ${objMensaje.discount} por haber comprado al menos ${objMensaje.threshold} en productos ${objMensaje.brand}!`;;
  }

}
