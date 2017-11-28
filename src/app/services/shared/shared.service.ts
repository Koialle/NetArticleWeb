import { Injectable } from '@angular/core';
import { Client } from '../../models/client';
import { Auteur } from '../../models/auteur';
import { Panier } from '../../models/panier';

@Injectable()
export class SharedService {
  public isConnected: boolean;
  public currentClient: Client;
  public currentAuteur: Auteur;
  private originalUrl: string;
  private panier: Panier;

  constructor() {
    this.panier = new Panier();
  }

  public setOriginalUrl(url: string): void {
    this.originalUrl = url;
  }

  public getOriginalUrl() {
    let url: string = this.originalUrl;
    this.originalUrl = '';

    if (url === '') {
      url = '/';
    }

    return url;
  }

  public setPanier(panier: Panier) {
    this.panier =  panier;
  }

  public getPanier(): Panier {
    return this.panier;
  }
}
