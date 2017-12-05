import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared/shared.service';
import { PanierService } from '../services/panier/panier.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(
    public sharedService: SharedService,
    public panierService: PanierService
  ) { }

  ngOnInit() {
    this.sharedService.isConnected = false;
    this.sharedService.currentClient = null;
    this.sharedService.currentAuteur = null;
  }

  public logout(): void {
    this.sharedService.isConnected = false;
    this.sharedService.currentAuteur = null;
  }
}
