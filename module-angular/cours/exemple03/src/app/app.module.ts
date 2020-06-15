import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TitiComponent } from './titi/titi.component';
// import { TotoComponent } from './toto/toto.component';

@NgModule({
  declarations: [
    AppComponent,
    // TitiComponent,
    // TotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
