import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice7',
  templateUrl: './exercice7.component.html',
  styleUrls: ['./exercice7.component.css']
})
export class Exercice7Component implements OnInit {

  public styleCustom: { width: number, height: number, bgColor: string }[] = [
    {
      width: 150,
      height: 50,
      bgColor: "brown"
    }, {
      width: 300,
      height: 100,
      bgColor: "silver"
    }, {
      width: 450,
      height: 150,
      bgColor: "gold"
    }];

  constructor() { }

  ngOnInit(): void {

  }

  modifyWidth(index: number) {
    this.styleCustom[index].width = this.styleCustom[index].width + 10;
  }
}
