import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  descripcion:string="Los servicios que presta El Cuatro están sujetos a disponibilidad técnica y geográfica dentro del territorio de la Provincia de Jujuy";
  descripcion2:string="Sistemas Informatico Colqui © 2023";
  
  constructor(){

  }

  ngOnInit(): void {
    
  }
}
