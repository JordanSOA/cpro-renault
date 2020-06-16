import { Component, OnInit } from '@angular/core';
import { CouleursService } from './couleurs.service';
@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.css']
})
export class Exo1Component implements OnInit {

  private colorService: CouleursService;
  public randColor: string;

  constructor(service: CouleursService) {
    this.colorService = service;
  }

  ngOnInit(): void {
  }

  generateDiv() {
    this.randColor = this.colorService.getColor();
  }

}
