import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AccessForbiddenComponent } from './access-forbidden/access-forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrivateGuard } from './private.guard';

const routes: Routes = [{
   path: 'home',
   component: HomeComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [PrivateGuard]
  }, {
    path: 'forbidden',
    component: AccessForbiddenComponent
  }, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: '**',
    component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
