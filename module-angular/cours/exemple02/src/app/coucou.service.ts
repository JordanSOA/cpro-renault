import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoucouService {

  public greetings: string;

  constructor() {
    console.log('Service instancié !');
    this.greetings = 'hello !';
  }

  getGreetings(){
    return this.greetings;
  }
}
