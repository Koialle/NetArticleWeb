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
    if (this.sharedService.isConnected) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
