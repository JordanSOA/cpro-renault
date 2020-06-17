import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PrivateGuard implements CanActivate {

  constructor(private api: ApiService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // map() est un opérateur qui permet de transformer la valeur emise par un observable à ses observer.
      return this.api.checkToken().pipe(
      map((isValid) => {
        if (isValid) {
          // Emet boolean
          return true;
        } else {
          // Emet UrlTree
          return this.router.parseUrl('/forbidden');
        }
      })
    );
  }
}
