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

    if (panier == undefined) {
      return new Panier();
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
