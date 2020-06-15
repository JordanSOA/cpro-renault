import { Component, OnInit } from '@angular/core';
import { StationService } from '../station.service';

@Component({
  selector: 'app-titi',
  templateUrl: './titi.component.html',
  styleUrls: ['./titi.component.css']
})
export class TitiComponent implements OnInit {

  public station: StationService;

  constructor(donneMoiUnObjet: StationService) {
    this.station = donneMoiUnObjet;
    // this.station = new StationService();
  }

  ngOnInit(): void {
    console.log('Ceci est un log provenant de Titi : ', this.station.nombre);
  }

  renseigneLeService(){
    this.station.message = 'message créé par Titi';
  }
}
