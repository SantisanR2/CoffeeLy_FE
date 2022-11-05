import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor (public router: Router) {

  }

  canActivate(

  next: ActivatedRouteSnapshot,

  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {



  if (localStorage.getItem("isAuth") === "true") {

    return true;

  }

    this.router.navigate(['/login/login']);

    return false;

  }
  
}
