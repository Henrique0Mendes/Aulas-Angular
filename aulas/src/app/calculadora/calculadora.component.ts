import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  equacao ="";
  mostrador="";

  mudarMostrador(event){
    if (event.target.value=="Clear"){
      this.mostrador="";
      this.equacao="";
    }else{
      this.equacao = this.equacao + event.target.value;
      this.mostrador = this.equacao;
    }
    
  }

  calcular(){
    this.equacao = eval(this.equacao);
    this.mostrador = this.equacao;
  }

}
