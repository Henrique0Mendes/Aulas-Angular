import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { EscolheAnimalComponent } from './escolhe-animal/escolhe-animal.component';
import { EvAndRefComponent } from './ev-and-ref/ev-and-ref.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { FichaAnimalComponent } from './ficha-animal/ficha-animal.component';
import { HomeComponent } from './home/home.component';
import { ReadMeGeneratorComponent } from './read-me-generator/read-me-generator.component';

const routes: Routes = [ 
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"calculadora", component:CalculadoraComponent},
  {path:"readMeGenerator", component:ReadMeGeneratorComponent},
  {path:"experiments", component:ExperimentsComponent},
  {path:"evAndRef",component:EvAndRefComponent},
  {path:"fichaAnimal", component:FichaAnimalComponent},
  {path:"escolheAnimal", component:EscolheAnimalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
