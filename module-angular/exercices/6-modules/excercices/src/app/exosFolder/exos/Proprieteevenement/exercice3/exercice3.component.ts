import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {

  public nombre: number = 0;
  public addOrSub: boolean;
  public upLimit: number = 10;
  public downLimit: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  numCal() {
    if (this.nombre >= this.upLimit) {
      this.addOrSub = true;
    }
    if (this.nombre <= this.downLimit) {
      this.addOrSub = false;
    }
    this.addOrSub ? this.nombre -= 1 : this.nombre += 1;
  }
}
