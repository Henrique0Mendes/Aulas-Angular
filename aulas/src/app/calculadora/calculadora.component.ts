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
  n1:number;
  n2:number;
  sinal:string="+";
  resultado:number;

  soma(){
    switch (this.sinal) {
      case '+':
        this.resultado=Number(this.n1)+Number(this.n2);
      break;
      case '-':
        this.resultado=Number(this.n1)-Number(this.n2);
      break;
      case '*':
        this.resultado=Number(this.n1)*Number(this.n2);
      break;
      case '/':
        this.resultado=Number(this.n1)/Number(this.n2);
      break;
      default:
        this.resultado=Number(this.n1)+Number(this.n2);
      break;
    }
    
  }
}
