import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, ValidationErrors, Validators} from '@angular/forms';
import { User } from '../api';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

const monValidator = (nombre: number) => {
  return (champ: AbstractControl): ValidationErrors | null => {
    // ici on peut effectuer des opérations sur champ.value
    return null; // null : pas d'erreur sur le champ pour ce validateur
  };
};

@Component({
  selector: 'app-registration-reactive',
  templateUrl: './registration-reactive.component.html',
  styleUrls: ['./registration-reactive.component.css']
})
export class RegistrationReactiveComponent implements OnInit {

  public registrationHasFailed: boolean;

  // Ecriture "simplifiée" avec la méthode group du FormBuilder
  public formulaireReactif = this.fb.group({
    firstname: ['', [
        Validators.required,
        Validators.minLength(1)
      ]
    ],
    lastname: ['', [
        Validators.required,
        Validators.minLength(1)
      ]
    ],
    birthdate:  ['', [
       Validators.required,
        monValidator(315435431)
      ]
    ],
    email:  ['', [
      Validators.required,
      Validators.email
      ]
    ],
    password:  ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('[A-Za-z0-9]+')
      ]
    ]
  });

  /*public formulaireReactif = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    birthdate: new FormControl('', [
      Validators.required,
      monValidator(315435431)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('[A-Za-z0-9]+')
    ])
  });*/

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  register(){
    return this.apiService
      .register(this.formulaireReactif.value as User)
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

  // Ecrire un getter pour simplifier l'écriture dans le template :
  get firstnameAttacheAuComposant() {
    return this.formulaireReactif.controls.firstname;
  }

  // Façon recommendée de le faire :
  get lastname(){
    return this.formulaireReactif.get('lastname');
  }
}
