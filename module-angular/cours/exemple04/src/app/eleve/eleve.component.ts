import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ElevesService } from '../eleves.service';
import { EleveInterface } from '../eleve-interface';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.css']
})
export class EleveComponent implements OnInit {

  private indice: number;
  public eleve: EleveInterface;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private elevesService: ElevesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( (parametres: ParamMap) => {
      // On récupére l'indice de l'URL.
      this.indice = parseInt(parametres.get('indice'), 10);
      // On utilise l'indice récupé pour obtenir 1 élève depuis le service.
      this.eleve = this.elevesService.getEleve(this.indice);
      if (!this.eleve) {
        this.router.navigate([
          '/eleves'
        ]);
      }
    });
  }

}
