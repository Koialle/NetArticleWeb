import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(): boolean {
    if (localStorage.getItem('currentClient')) {
      // logged as client in so return true
      return true;
    }
    // not logged as client in so redirect to login
    localStorage.removeItem('currentClient');
    localStorage.removeItem('currentAuthor');
    this.router.navigate(['/login']);
    return false;
  }
}
