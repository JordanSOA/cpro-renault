import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-c2',
  templateUrl: './exercice-c2.component.html',
  styleUrls: ['./exercice-c2.component.css']
})
export class ExerciceC2Component implements OnInit {

  public user: {fname:string,lname:string,email:string,age:number} = {
    fname: "jojo",
    lname: "l'asticot",
    email: "jojo@ouais.com",
    age: 10
  };

  public listeUtilisateurs: {fname:string,lname:string,email:string,age:number}[] = [this.user];


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(status:string){
    if (status == "VALID"){
      this.listeUtilisateurs.push(this.user);
    }
  }
}
