import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css']
})
export class Exercice4Component implements OnInit {

  public activeNum: number;

  constructor() { }

  ngOnInit(): void {
  }

  fmethod(num: number):number{
    return this.activeNum = num;
  }

  isSame(newActiveNum:number): boolean{
    return (this.activeNum == newActiveNum);
  }
  
}
