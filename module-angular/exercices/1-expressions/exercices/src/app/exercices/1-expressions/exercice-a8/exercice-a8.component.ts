import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-exercice-a8',
  templateUrl: './exercice-a8.component.html',
  styleUrls: ['./exercice-a8.component.css']
})
export class ExerciceA8Component implements OnInit {

  public garage: {modele:string,puissance:string,prix:number,dateFab: number}[] = [
    {
    modele:"carrera porsche",
    puissance:"200ch",
    prix: 50000,
    dateFab: Date.parse("2003-12-03"),
  },{
    modele:"cayenne porsche",
    puissance:"160ch",
    prix: 80000,
    dateFab: Date.parse("2012-08-15"),
  },{
    modele:"q7 audi",
    puissance:"220ch",
    prix: 100000,
    dateFab: Date.parse("2019-02-21"),
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
