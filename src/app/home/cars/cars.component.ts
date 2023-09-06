import { Component, OnInit } from '@angular/core';
import { listaPromo } from 'src/app/data/datos';
import { Promocion } from 'src/app/models/Promo';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  listaPromocione:Promocion[]=listaPromo;

  titulo:string="Potenciá tu conectividad con nuestras promos"; 
  
  constructor(){
    console.log("anda connrrecto");
    console.log(this.titulo);
    console.log(this.listaPromocione)
  }

  ngOnInit(): void {
    
  }

}
