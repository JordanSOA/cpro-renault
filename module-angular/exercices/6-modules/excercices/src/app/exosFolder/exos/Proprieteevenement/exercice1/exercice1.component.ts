import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  dogImg:string = "https://c2.lestechnophiles.com/www.numerama.com/content/uploads/2016/01/snoop-dogg-une.jpeg";

  public catImg: string[] = ["https://i2.wp.com/smallthings.fr/wp-content/uploads/2016/04/nyan-cat-stars-in-ios-adventure-game-video-e6a4e2ba4c.jpg",
  "https://lachroniquefacile.fr/wp-content/uploads/2013/08/garfield.gif",
  "https://i.redd.it/fgja01pwso241.jpg"];

  constructor() { }

  ngOnInit(): void {
  }

}
