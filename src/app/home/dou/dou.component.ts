import { Component } from '@angular/core';

@Component({
  selector: 'app-dou',
  templateUrl: './dou.component.html',
  styleUrls: ['./dou.component.css']
})
export class DouComponent {

  letra:string='hola mundo'

  constructor(){
    console.log(this.letra)

    
  }
  
}
