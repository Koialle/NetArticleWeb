import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SharedService } from '../services/shared/shared.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private sharedService: SharedService
  ) { }

  canActivate(): boolean {
    if (localStorage.getItem('currentClient') || localStorage.getItem('currentAuthor')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
