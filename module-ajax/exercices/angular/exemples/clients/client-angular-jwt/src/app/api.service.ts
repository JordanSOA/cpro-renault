import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Token, Profile, Error } from './api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private token: string;
  private baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
    this.token = this.getToken();
  }

  login(email: string, password: string) {
    return this.httpClient.post<Token>(`${this.baseUrl}/login`, {
      email,
      password
    }).pipe(
      map((reponse) => {
        if (reponse.token) {
          this.setToken(reponse.token);
          return true;
        } else {
          return false;
        }
      }),
      catchError( (error: any) => {
        return of(false);
      })
    );
  }

  getProfile() {
    return this.httpClient.get<Profile>(`${this.baseUrl}/private/user`, {
      headers: {
        Authorization: `Bearer ${this.getToken()}`
      }
    }).pipe(
      map((reponse) => {
        if (reponse.data) {
          return reponse.data;
        }else {
          return false;
        }
      }),
      catchError( (error: any) => {
        return of(false);
      })
    );
  }

  checkToken() {
    return this.httpClient.get<Error>(`${this.baseUrl}/private/token/verify`, {
      headers: {
        Authorization: `Bearer ${this.getToken()}`
      }
    }).pipe(
      map((response: Error) => {
        if (response.error) {
          return false; // boolean
        } else {
          return true; // boolean
        }
      }),
      catchError( (error: any) => {
        return of(false);
      })
    );
  }

  getToken() {
    this.token = localStorage.getItem('token');
    return this.token;
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  clearToken() {
    localStorage.setItem('token', '');
    this.token = '';
  }
}
