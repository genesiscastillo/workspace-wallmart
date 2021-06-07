import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Descuento } from '../interfaces/descuento';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DescuentoService {

  private baseUrl: string = environment.apiBackendDescuentos;
  constructor( private http: HttpClient) { }

  getDescuentos():Observable<Descuento[]>{
    return this.http.get<Descuento[]>(`${this.baseUrl}/discounts`);
  }
}
