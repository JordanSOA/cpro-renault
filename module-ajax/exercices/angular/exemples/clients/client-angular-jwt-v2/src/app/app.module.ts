import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessForbiddenComponent } from './access-forbidden/access-forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationTemplateDrivenComponent } from './registration-template-driven/registration-template-driven.component';
import { RegistrationReactiveComponent } from './registration-reactive/registration-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessForbiddenComponent,
    NotFoundComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    RegistrationTemplateDrivenComponent,
    RegistrationReactiveComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
