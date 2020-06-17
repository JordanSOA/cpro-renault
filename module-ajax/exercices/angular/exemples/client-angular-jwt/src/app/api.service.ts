import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Token, Profile, Error } from './api';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private token: string;
  private baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    return this.httpClient.post<Token>(`${this.baseUrl}/login`, {
      email,
      password
    }).pipe(
      map((reponse) => {
        if (reponse.token) {
          this.token = reponse.token;
          return true;
        } else {
          return false;
        }
      })
    );
  }

  getProfile() {
    return this.httpClient.get<Profile>(`${this.baseUrl}/private/user`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      map((reponse) => {
        if (reponse.data) {
          return reponse.data;
        }else {
          return false;
        }
      })
    );
  }

  checkToken() {
    return this.httpClient.get<Profile>(`${this.baseUrl}/private/token/verify`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      map((response: Error) => {
        if (response.error) {
          return this.router.parseUrl('/forbidden'); // UrlTree
        } else {
          return true; // boolean
        }
      }),
      catchError( (error: any) => {
        return this.router.navigate(['/forbidden']);
      })
    );
  }

  getToken() {
    return this.token;
  }

  clearToken() {
    this.token = '';
  }
}
