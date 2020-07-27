import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProtectedAreaComponent } from './protected-area/protected-area.component';
import { UnprotectedComponent } from './unprotected/unprotected.component';
import { ProtectorGuard } from './protector.guard';
import { SuperProtectorGuard } from './super-protector.guard';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'protected',
  component: ProtectedAreaComponent,
  canActivate: [
    ProtectorGuard,
    SuperProtectorGuard
  ]
}, {
  path: 'unprotected',
  component: UnprotectedComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
