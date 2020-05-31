import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExerciceC1Component } from './exercice-c1/exercice-c1.component';
import { ExerciceC2Component } from './exercice-c2/exercice-c2.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciceC1Component,
    ExerciceC2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
