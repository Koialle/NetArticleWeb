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
    localStorage.setItem('panier', JSON.stringify(panier));
  }

  public getPanier(): Panier {
    var panier : Panier = Panier.fromJSON(localStorage.getItem('panier'));

    if (panier == undefined) {
      return new Panier();
    } else {
      return panier;
    }
  }

  public clearPanier(): void {
    localStorage.setItem('panier', JSON.stringify(new Panier()));
  }
}
