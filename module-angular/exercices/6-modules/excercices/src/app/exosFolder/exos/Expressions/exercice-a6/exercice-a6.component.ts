import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a6',
  templateUrl: './exercice-a6.component.html',
  styleUrls: ['./exercice-a6.component.css']
})
export class ExerciceA6Component implements OnInit {

  public opt: string[]= ["rouge","bleu","vert", "rouge et bleu","bleu et vert","vert et rouge","rouge et vert et bleu"];

  constructor() { }

  ngOnInit(): void {
  }
  
}
