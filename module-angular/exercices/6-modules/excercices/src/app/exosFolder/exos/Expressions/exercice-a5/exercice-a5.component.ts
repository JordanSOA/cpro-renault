import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a5',
  templateUrl: './exercice-a5.component.html',
  styleUrls: ['./exercice-a5.component.css']
})
export class ExerciceA5Component implements OnInit {
  public classe:{nom:String, specialite: String, inscrits: Object[]} = {
    nom:'rlt2019',
    specialite: 'FullStack',
    inscrits: [{
      prenom: "Jordan",
      nom: "Soares",
      age: 27
    },{
      prenom: "Kobe",
      nom: "Bryant",
      age: 42
    },{
      prenom: "Michael",
      nom: "Jordan",
      age: 50
    }]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
