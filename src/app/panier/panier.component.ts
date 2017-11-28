import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared/shared.service';
import { ArticleService } from '../services/article/article.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Panier } from '../models/panier';
import { Article } from '../models/article';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  public error: string;
  public panier: Panier;

  constructor(
    private articleService: ArticleService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
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

    this.panier = this.sharedService.getPanier();

    //@TODO replace by switch-case
    if (action === 'ajouter') {
      this.ajouterArticle(idArticle);
    } else if (action === 'supprimer') {
      this.supprimerArticle(idArticle);
    } else if (action === 'valider') {
      this.validerPanier();
    }
  }

  ajouterArticle(idArticle: number) {
    //@TODO
    this.articleService.getArticle(idArticle).subscribe(
      (article) => {
        if (this.panier.contains(article)) {
          this.error = "Le panier contient déjà cet article!";
        } else {
          this.panier.ajouterArticle(article);
          this.sharedService.setPanier(this.panier);
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
    //@TODO
    this.articleService.getArticle(idArticle).subscribe(
      (article) => {
        this.panier.supprimerArticle(article);
        this.sharedService.setPanier(this.panier);
      },
      (error) => { this.error = error.message; },
      () => {
        // finally
        this.router.navigate(['/panier']);
      }
    );
  }

  validerPanier() {
    this.router.navigate(['/panier']);
  }
}
