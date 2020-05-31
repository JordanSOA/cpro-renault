import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice5',
  templateUrl: './exercice5.component.html',
  styleUrls: ['./exercice5.component.css']
})
export class Exercice5Component implements OnInit {

  public kcInput: number;
  public xVal: number;
  public yVal: number;
  constructor() { }

  ngOnInit(): void {
  }

  gestionKeyUp(evt: KeyboardEvent) {
    this.kcInput = evt.keyCode;
  }

  suivre(a: number, b: number) {
    this.xVal = a;
    this.yVal = b;
  }
}
