import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Auth } from 'aws-amplify';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { };

  public canActivate(): Observable<boolean | UrlTree> {
    // return of(true);
    return from(Auth.currentAuthenticatedUser())
      .pipe(map((data) => {
        if (data.username) {
          console.log('CanActivate data:', data);
          return true;
        }
        else {
          this.router.navigate(['login']);
          return false;
        }
      }))
      .pipe(catchError(() => {
        this.router.navigate(['login']);
        return of(false);
      }));
  }
}
