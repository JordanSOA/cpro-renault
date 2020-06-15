import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a3',
  templateUrl: './exercice-a3.component.html',
  styleUrls: ['./exercice-a3.component.css']
})
export class ExerciceA3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  salute(): string {
    return "Bonjour !";
  }
  
  division(a: number, b: number): number{
    return (a/b);
  }

  concatStrings(arr:string[]): string{
    return arr.join("");
  }
}
