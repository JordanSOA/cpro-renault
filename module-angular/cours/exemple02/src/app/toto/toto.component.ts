import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-toto',
  templateUrl: './toto.component.html',
  styleUrls: ['./toto.component.css']
})
export class TotoComponent implements OnInit, OnChanges, OnDestroy {
  public message: string;
  public zeStyle = {
    color: 'red'
  };

  public nombre1?: number;
  public nombre2?: number;
  public resultat?: number;

  constructor() {
    this.message = 'Ceci est un message de la part de toto';
  }

  calcul(leForm: NgForm){
    console.dir(leForm);
    // logique appliative
    this.resultat = this.nombre1 + this.nombre2;
  }

  jeClique() {
    this.message = 'Message modifié';
  }

  touchePressee(valeurDuChamp: string) {
    this.message = valeurDuChamp;
  }

  coucou(): string {
    return 're coucou';
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
  }

  ngOnDestroy(): void {

  }
}