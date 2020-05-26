import {Component} from '@angular/core';

// voir https://angular.io/api/core/Component

@Component({
  selector: 'app-couscous-merguez',
  templateUrl: 'choucroute.component.html',
  styleUrls: [ 'choucroute.component.css' ]
})
export class ChoucrouteComponent {
  public monAvis =  'C\'est très bon';

  public unStylePourMonP = {
    color: 'red'
  };

  public  uneClassPourMonP = {
    toto: true, titi: false
  }

  uneMethodeDuComposant(unNombre: number){

  }

  switch(monEvenement: MouseEvent){
    this.uneClassPourMonP.toto = !this.uneClassPourMonP.toto;
    this.uneClassPourMonP.titi = !this.uneClassPourMonP.titi;
  }

  estCeQuelaClasseTotoEstUtilisee() {
    return this.uneClassPourMonP.toto;
  }
}
