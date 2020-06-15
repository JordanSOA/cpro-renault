import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouleursService {
  private colors: string[] = ["#ff0000","#00ff00","#ffff00","#0000ff","#ff00ff"];

  constructor() {
  }

  public getColor(): string{
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
