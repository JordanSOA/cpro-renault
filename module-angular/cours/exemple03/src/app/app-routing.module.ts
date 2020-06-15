import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TotoComponent } from './toto/toto.component';
import { TitiComponent } from './titi/titi.component';

const routes: Routes = [{
    path: 'chemin-vers-toto',
    component: TotoComponent
  }, {
    path: 'chemin-vers-titi',
    component: TitiComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
