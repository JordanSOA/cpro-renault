import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExosComponent } from './exos.component';
import { ExerciceA0Component } from './Expressions/exercice-a0/exercice-a0.component';
import { ExerciceA1Component } from './Expressions/exercice-a1/exercice-a1.component';
import { ExerciceA2Component } from './Expressions/exercice-a2/exercice-a2.component';
import { ExerciceA3Component } from './Expressions/exercice-a3/exercice-a3.component';
import { ExerciceA4Component } from './Expressions/exercice-a4/exercice-a4.component';
import { ExerciceA5Component } from './Expressions/exercice-a5/exercice-a5.component';
import { ExerciceA6Component } from './Expressions/exercice-a6/exercice-a6.component';
import { ExerciceA7Component } from './Expressions/exercice-a7/exercice-a7.component';
import { ExerciceA8Component } from './Expressions/exercice-a8/exercice-a8.component';
import { ExerciceC1Component } from './Formulaires/exercice-c1/exercice-c1.component';
import { ExerciceC2Component } from './Formulaires/exercice-c2/exercice-c2.component';
import { Exercice1Component } from './Proprieteevenement/exercice1/exercice1.component';
import { Exercice2Component } from './Proprieteevenement/exercice2/exercice2.component';
import { Exercice3Component } from './Proprieteevenement/exercice3/exercice3.component';
import { Exercice4Component } from './Proprieteevenement/exercice4/exercice4.component';
import { Exercice5Component } from './Proprieteevenement/exercice5/exercice5.component';
import { Exercice6Component } from './Proprieteevenement/exercice6/exercice6.component';
import { Exercice7Component } from './Proprieteevenement/exercice7/exercice7.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ExosRoutingModule } from './exos-routing.module';
import { Exo1Component } from './Services/exo1/exo1.component';
import { TodoListComponent } from './Services/exo2/todo-list/todo-list.component';
import { TodoComponent } from './Services/exo2/todo/todo.component';
import { TodoFormComponent } from './Services/exo2/todo-form/todo-form.component';

@NgModule({
  declarations: [
    //Expressions
    ExerciceA0Component,
    ExerciceA1Component,
    ExerciceA2Component,
    ExerciceA3Component,
    ExerciceA4Component,
    ExerciceA5Component,
    ExerciceA6Component,
    // ExerciceA7Component,
    // ExerciceA8Component,
    // //Formulaire
    // ExerciceC1Component,
    // ExerciceC2Component,
    // //Proprietes Evenements
    // Exercice1Component,
    // Exercice2Component,
    // Exercice3Component,
    // Exercice4Component,
    // Exercice5Component,
    // Exercice6Component,
    // Exercice7Component,
    // //Services
    // Exo1Component,
    // //Exo2
    // TodoComponent,
    // TodoFormComponent,
    // TodoListComponent
],
  imports: [
    CommonModule,
    ExosRoutingModule,
    BrowserModule,
    FormsModule
  ],
  exports:[]
})
export class ExosModule { }
