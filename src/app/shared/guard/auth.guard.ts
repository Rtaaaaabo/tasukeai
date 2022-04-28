import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Auth } from 'aws-amplify';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public canActivate(): Observable<boolean | UrlTree> {
    return from(Auth.currentAuthenticatedUser()).pipe(map((data) => {
      if (data.username) {
        return true;
      }
      else {
        return false;
      }
    }));
  }
}
