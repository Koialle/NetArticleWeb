import { Injectable } from '@angular/core';
import { Panier } from '../../models/panier';

@Injectable()
export class PanierService {

  constructor() { }
  public setPanier(panier: Panier) {
    localStorage.setItem('panier', JSON.stringify(panier));
  }

  public getPanier(): Panier {
    var panier : Panier = Panier.fromJSON(localStorage.getItem('panier'));
    !panier.articles ? panier.articles = [] : '';
    !panier.total ? panier.total = 0 : '';

    if (panier == undefined) {
      panier = new Panier();
      panier.articles = [];
      panier.total = 0;
      return panier;
    } else {
      return panier;
    }
  }

  public clearPanier(): void {
    localStorage.setItem('panier', JSON.stringify(new Panier()));
  }

  public getTaillePanier(): number {
    return this.getPanier().getNbArticles();
  }

  public getMontantTotal(): number {
    return this.getPanier().getMontantTotal();
  }
}
