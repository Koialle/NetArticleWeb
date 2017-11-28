import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared/shared.service';
import { ArticleService } from '../services/article/article.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Panier } from '../models/panier';

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
    this.panier = this.sharedService.getPanier();
    console.log(this.activatedRoute.snapshot.url);
  }

  afficherPanier() {

  }

  ajouterArticle(idArticle: number) {
    //@TODO
  }

  supprimerArticle(idArticle: number) {
    //@TODO
  }

  delete(idArticle: number): void {
    this.articleService.getArticle(idArticle).subscribe(
      (article) => { this.panier.supprimerArticle(article); },
      (error) => { this.error = error.message; },
      () => {
        // finally
      }
    );
  }
}
