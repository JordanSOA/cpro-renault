import { Component, OnInit } from '@angular/core';
import { StationService } from '../station.service';

@Component({
  selector: 'app-toto',
  templateUrl: './toto.component.html',
  styleUrls: ['./toto.component.css']
})
export class TotoComponent implements OnInit {

  public leService: StationService;

  constructor(moiAussiJeVeuxUnObjet: StationService) {
    //this.leService = new StationService();
    this.leService = moiAussiJeVeuxUnObjet;
  }

  ngOnInit(): void {
    console.log('Ceci est un log provenant de Toto : ', this.leService.nombre);
  }

}
