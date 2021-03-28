import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  @ViewChild('ref') referencia;

  constructor() { }

  ngOnInit(): void {
  }

  name:string ="Henrique";
  arrayAnimais : Array<string> = ["cao","gato", "papagaio", "coelho"];

  changeName(event){
    this.name=event.target.value;
  }

  isfocus(event){
    console.log("gfsr8ug");
  }

  analisarReferencia(){
    console.log(this.referencia.nativeElement.value);
    this.referencia.nativeElement.style.background="red";
  }
  analisarReferenciaParametro(referencia){
    console.log(referencia.value);
    referencia.style.background="red";
  }
}
