import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(
    public sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public logout(): void {
    localStorage.removeItem('currentClient');
    localStorage.removeItem('currentAuthor');
    this.router.navigate(['/article/last']);
  }

  public isLogged(): boolean {
    if(localStorage.getItem('currentClient') || localStorage.getItem('currentAuthor')) {
      return true;
    }
    return false
  }

  public isAuthor(): boolean {
    if(localStorage.getItem('currentAuthor')){
      return true;
    }
    return false;
  }

  public isClient(): boolean {
    if(localStorage.getItem('currentClient')){
      return true;
    }
    return false;
  }
}
