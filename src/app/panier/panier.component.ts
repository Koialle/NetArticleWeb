import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared/shared.service';
import { ArticleService } from '../services/article/article.service';
import { AchatsService } from '../services/achats/achats.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Panier } from '../models/panier';
import { Article } from '../models/article';
import { Client } from '../models/client';
import { Achat } from '../models/achat';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  public error: string = "";
  public panier: Panier;

  constructor(
    private articleService: ArticleService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private achatService: AchatsService,
    private router: Router
  ) { }

  ngOnInit() {
    let action: string;
    let idArticle: number;

    this.activatedRoute.params.subscribe((params) => {
      idArticle = +params['id'];
    });

    this.activatedRoute.url.subscribe((url) => {
      action = (url.length > 0) ? url[0].path : '';
    });

    this.panier = this.getPanier();

    switch(action) {
      case 'ajouter':
        this.ajouterArticle(idArticle);
        break;
      case 'supprimer':
        this.supprimerArticle(idArticle);
        break;
      case 'valider':
        this.validerPanier();
        break;
    }
  }

  ajouterArticle(idArticle: number) {
    this.articleService.getArticle(idArticle).subscribe(
      (article) => {
        if (this.panier.contains(article)) {
          this.error = "Le panier contient déjà cet article!";
        } else {
          this.panier.ajouterArticle(article);
          this.setPanier(this.panier);
        }
      },
      (error) => { this.error = error.message; },
      () => {
        // finally
        this.router.navigate(['/panier']);
      }
    );
  }

  supprimerArticle(idArticle: number) {
    this.articleService.getArticle(idArticle).subscribe(
      (article) => {
        this.panier.supprimerArticle(article);
        this.setPanier(this.panier);
      },
      (error) => { this.error = error.message; },
      () => {
        // finally
        this.router.navigate(['/panier']);
      }
    );
  }

  validerPanier() {
    // Check client is authenticated
    if (!this.sharedService.isConnected) {
      this.router.navigate(['/login']);
    }

    var achats : Achat[];
    var client : Client = this.sharedService.currentClient;

    this.achatService.getClientAchats(client.idClient).subscribe(achats => {
      achats as Achat[]
    });

    if (this.panier === undefined) {
      this.panier = this.getPanier();
    }

    this.panier.articles.forEach(article => {
        // Check client hasn't already article
        if (this.checkAchatsContainsArticle(achats, article)) {
            this.error = "Vous possédez déjà l'article " + article.titre;
        } else {
            // Add article
            var achat = new Achat();
            achat.idArticle = article.idArticle;
            achat.idClient = client.idClient;
            this.achatService.acheterArticle(client.idClient, article.idArticle).subscribe(
              () => {
                this.sharedService.clearPanier();
                this.router.navigate(['/achats']);
              },
              (error) => { this.error = error.message }
            )
        }
    });
  }

  getPanier() : Panier {
    return this.sharedService.getPanier();
  }

  setPanier(panier: Panier) : void {
    this.sharedService.setPanier(panier);
  }

  private checkAchatsContainsArticle(achats: Achat[], article: Article) : boolean {
    achats.forEach(achat => {
      if (achat.article == article) {
        return true;
      }
    });

    return false;
  }
}
