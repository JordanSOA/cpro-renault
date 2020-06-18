import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProtectorGuard implements CanActivate {

  constructor(private router: Router, private httpClient: HttpClient){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // Avec une test simple
      /*const continuer = confirm("Etes vous sur de vouloir voir cette page");
      if (continuer) {
        return true;
      } else {
        return this.router.parseUrl('/');
      }*/
      // Avec un observable
      /*
      const observableDeBase = this.httpClient
        .get(`???`);

      const observableAmelioré = observableDeBase.pipe(
        map((valeurEmise) => {
          // traitement sur la valeurEmise
          return nouvelleValeurEmise; // boolean | UrlTree
        }),
        catchError((error: any) => {
          return of(this.router.parseUrl('/'));
        })
      );

      return observableAmelioré;
      */
     return false;
  }
}
