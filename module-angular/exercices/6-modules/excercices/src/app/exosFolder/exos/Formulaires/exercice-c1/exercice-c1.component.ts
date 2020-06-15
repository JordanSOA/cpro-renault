import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-c1',
  templateUrl: './exercice-c1.component.html',
  styleUrls: ['./exercice-c1.component.css']
})
export class ExerciceC1Component implements OnInit {

  public adresseDeLImage: string = "";
  public saisieUtilisateur: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.adresseDeLImage = this.saisieUtilisateur;
  }
}
