import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoucrouteComponent } from './choucroute.component';
import { AppBoeufCarotteComponent } from './app-boeuf-carotte/app-boeuf-carotte.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoucrouteComponent,
    AppBoeufCarotteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
