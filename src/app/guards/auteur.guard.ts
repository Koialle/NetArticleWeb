import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuteurGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate(): boolean {
    if (localStorage.getItem('currentAuthor')) {
      // logged as author in so return true
      return true;
    }
    // not logged as author in so redirect to login
    localStorage.removeItem('currentClient');
    localStorage.removeItem('currentAuthor');
    this.router.navigate(['/login']);
    return false;
  }
}
