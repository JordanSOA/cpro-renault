import { Component, OnInit } from '@angular/core';
import { ElevesService } from '../eleves.service';
import { EleveInterface } from '../eleve-interface';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit {

  public eleves: EleveInterface[];

  constructor(private eleveService: ElevesService) {}

  ngOnInit(): void {
    this.eleves = this.eleveService.getEleves();
  }

}
