import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { User } from '../api';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-template-driven',
  templateUrl: './registration-template-driven.component.html',
  styleUrls: ['./registration-template-driven.component.css']
})
export class RegistrationTemplateDrivenComponent implements OnInit {

  public user: User = {
    firstname: '',
    lastname: '',
    birthdate: '',
    email: '',
    password: ''
  };

  public registrationHasFailed: boolean;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  register(formulaire: NgForm) {
    return this.apiService
      .register(this.user)
      .subscribe( (resultat: boolean) => {
        if (resultat) {
          return this.router.navigate([
            '/profile'
          ]);
        } else {
          this.registrationHasFailed = true;
        }
      });
  }
}
