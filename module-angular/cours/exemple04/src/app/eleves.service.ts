import { Injectable } from '@angular/core';
import { EleveInterface } from './eleve-interface';

@Injectable({
  providedIn: 'root'
})
export class ElevesService {

  private liste: EleveInterface[] = [{
    prenom: 'Pierre',
    nom: 'Dupont',
    age: 28
  }, {
    prenom: 'Paul',
    nom: 'Durand',
    age: 32
  }, {
    prenom: 'Marie',
    nom: 'Dupuis',
    age: 27
  }];

  constructor() { }

  getEleves(){
    return this.liste;
  }

  getEleve(indice: number) {
    return this.liste[indice];
  }

  accesAutorise() {
    return true;
  }
}
