import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProtectedAreaComponent } from './protected-area/protected-area.component';
import { UnprotectedComponent } from './unprotected/unprotected.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProtectedAreaComponent,
    UnprotectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
