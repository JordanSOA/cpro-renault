import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public message: string;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  connexion(){
    return this.api
      .login(this.email, this.password)
      .subscribe((isLoggedIn) => {
        if (isLoggedIn) {
          return this.router.navigate(['/profile']);
        } else {
          this.message = 'E-Mail ou mot de passe invalide';
        }
      });
  }

}
