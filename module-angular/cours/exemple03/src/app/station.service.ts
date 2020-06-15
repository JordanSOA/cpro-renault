import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  public nombre: number;
  public message: string;

  constructor() {
    this.nombre = Math.random();
  }
}
