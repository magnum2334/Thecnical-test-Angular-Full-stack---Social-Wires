import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private router:Router, private _snackBar:MatSnackBar){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoggedIn = false;
      const token = localStorage.getItem('userAuth');
      const user:any  = (localStorage.getItem('user') != null) ? localStorage.getItem('user') : '' ;

      if (token && user) {
        isLoggedIn = true;
      }
      if (!isLoggedIn) {
        this.router.navigate(['login']);
        this._snackBar.open("el usuario no existe ", "Cerrar", {
          duration: 3000,
          panelClass: "font",
        })
        return false;
      }
      return true;
  }

}
