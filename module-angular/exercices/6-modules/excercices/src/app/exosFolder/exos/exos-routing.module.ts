import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciceA0Component } from './Expressions/exercice-a0/exercice-a0.component';
import { ExerciceA1Component } from './Expressions/exercice-a1/exercice-a1.component';


const routes: Routes = [{
    path:'ExpressionsExo0',
    component: ExerciceA0Component
},{
    path:'ExpressionsExo1',
    component: ExerciceA1Component
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExosRoutingModule { }