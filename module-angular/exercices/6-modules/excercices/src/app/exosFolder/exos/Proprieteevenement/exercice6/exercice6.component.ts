import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice6',
  templateUrl: './exercice6.component.html',
  styleUrls: ['./exercice6.component.css']
})
export class Exercice6Component implements OnInit {

  public news: boolean;
  public cgu: boolean;
  public valide: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  checkNews(isChecked: boolean) {
    this.news = isChecked;
    this.valide = !(this.news && this.cgu);
  }
  checkCgu(isChecked: boolean) {
    this.cgu = isChecked;
    this.valide = !(this.news && this.cgu);
  }
}