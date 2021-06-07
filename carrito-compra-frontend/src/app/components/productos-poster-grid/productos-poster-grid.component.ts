import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-productos-poster-grid',
  templateUrl: './productos-poster-grid.component.html',
  styleUrls: ['./productos-poster-grid.component.css']
})
export class ProductosPosterGridComponent implements OnInit {


  @Input() productos: Producto[];


  constructor() { }

  ngOnInit(): void {

    console.log( this.productos );
  }

}
