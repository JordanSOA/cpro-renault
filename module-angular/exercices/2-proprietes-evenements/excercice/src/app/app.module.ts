import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { FormsModule } from '@angular/forms';
import { Exercice3Component } from './exercice3/exercice3.component';
import { Exercice4Component } from './exercice4/exercice4.component';
import { Exercice5Component } from './exercice5/exercice5.component';
import { Exercice6Component } from './exercice6/exercice6.component';
import { Exercice7Component } from './exercice7/exercice7.component';
@NgModule({
  declarations: [
    AppComponent,
    Exercice1Component,
    Exercice2Component,
    Exercice3Component,
    Exercice4Component,
    Exercice5Component,
    Exercice6Component,
    Exercice7Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
