import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClasseComponent } from './classe/classe.component';
import { ElevesComponent } from './eleves/eleves.component';
import { EleveComponent } from './eleve/eleve.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GardienGuard } from './gardien.guard';


const routes: Routes = [{
  path: 'classe',
  component: ClasseComponent,
  canActivate: [GardienGuard]
}, {
  path: 'eleves',
  component: ElevesComponent
}, {
  path: 'eleve/:indice',
  component: EleveComponent
}, {
  path: 'forbidden',
  component: ForbiddenComponent
}, {
  path: '',
  redirectTo: '/classe',
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
