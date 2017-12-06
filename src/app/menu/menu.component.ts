import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared/shared.service';
import { PanierService } from '../services/panier/panier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(
    public sharedService: SharedService,
    public panierService: PanierService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public logout(): void {
    this.sharedService.clearUser();
    this.router.navigate(['/']);
  }

  public isLogged(): boolean {
    return this.sharedService.isConnected();
  }

  public isAuthor(): boolean {
    return this.sharedService.isAuteurConnected();
  }

  public isClient(): boolean {
    return this.sharedService.isClientConnected();
  }
}
