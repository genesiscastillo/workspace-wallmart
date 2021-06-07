import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl: string = environment.apiBackendProductos;
  constructor( private http: HttpClient) { }

  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseUrl}/products`);
  }
}
