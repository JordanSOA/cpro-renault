import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ExerciceA0Component } from './exercices/1-expressions/exercice-a0/exercice-a0.component';
import { ExerciceA1Component } from './exercices/1-expressions/exercice-a1/exercice-a1.component';
import { ExerciceA2Component } from './exercices/1-expressions/exercice-a2/exercice-a2.component';
import { ExerciceA3Component } from './exercices/1-expressions/exercice-a3/exercice-a3.component';
import { ExerciceA4Component } from './exercices/1-expressions/exercice-a4/exercice-a4.component';
import { ExerciceA5Component } from './exercices/1-expressions/exercice-a5/exercice-a5.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciceA0Component,
    ExerciceA1Component,
    ExerciceA2Component,
    ExerciceA3Component,
    ExerciceA4Component,
    ExerciceA5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
