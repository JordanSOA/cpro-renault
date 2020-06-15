import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciceA7Component } from './1-expressions/exercice-a7/exercice-a7.component';
import { Exercice6Component } from './2-propEvent/exercice6/exercice6.component';
import { Exo1Component } from './4-services/exo1/exo1.component';
import { ExerciceA3Component } from './1-expressions/exercice-a3/exercice-a3.component';



const routes: Routes = [{
  path:'ExpressionExo3',
  component: ExerciceA3Component
},{
  path:'ExpressionExo7',
  component: ExerciceA7Component
},{
  path: 'PropEventExo6',
  component: Exercice6Component
},{
  path: 'ServicesExo1',
  component: Exo1Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
