import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  inicio:string="Inicio";
  promocion:string="Promociones";
  grilla:string="Grilla de Clientes";
  sucursal:string="Sucursal Virtual";
  red:string="Red de Fibra";

  constructor(){

  }

  ngOnInit(): void {
    
  }
}
