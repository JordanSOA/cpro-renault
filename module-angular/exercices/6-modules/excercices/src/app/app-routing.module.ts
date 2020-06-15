import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExosComponent } from './exosFolder/exos/exos.component';


const routes: Routes = [{
  path:'/',
  loadChildren: () =>  ExosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
