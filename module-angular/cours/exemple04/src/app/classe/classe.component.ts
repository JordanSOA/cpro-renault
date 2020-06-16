import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sanisettes, Sanisette } from '../sanisettes';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  private url = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=sanisettesparis&q=&facet=type&facet=statut&facet=arrondissement&facet=horaire&facet=acces_pmr&facet=relais_bebe';

  public sanisettes: Sanisette[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Sanisettes>(this.url, {
      responseType: 'json'
    }).subscribe((data) => {
      this.sanisettes = data.records;
    });
  }

}
