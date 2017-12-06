import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from '../models/article';
import { ArticleService } from '../services/article/article.service';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public error: string;
  public articles: Article[];
  public domaineId: number;
  public title: string;

  constructor(
    private articleService: ArticleService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.error = "";
    let domaineId = +this.activatedRoute.snapshot.paramMap.get('domaineId');

    if (isNaN(domaineId) || domaineId === 0) {
      this.getArticles();
    } else if (domaineId  > 0) {
      this.getArticlesByDomaine(domaineId);
    }
  }

  getArticles() {
    this.title = "Liste des articles";
    this.domaineId = 0;
    this.articleService.getArticles().subscribe(
      (articles) => {
        this.articles = articles;
      },
      (error) => {
        this.error = error.message;
      }
    )
  }

  getArticlesByDomaine(domaineId: number) {
    this.title = "Liste des articles d'un domaine";
    this.domaineId = domaineId;
    this.sharedService.setOriginalUrl('/articles/domaine/' + this.domaineId);
    this.articleService.getArticlesByDomaine(domaineId).subscribe(
      (articles) => {
        this.articles = articles;
      },
      (error) => {
        this.error = error.message;
      }
    )
  }

  domaineSelected(domaineId: number) {
    if (!isNaN(domaineId) && domaineId !== 0) {
      // this.domaineId = domaineId;
      // this.router.navigate(['/articles/domaine/' + domaineId]);
      this.getArticlesByDomaine(domaineId);
    } else {
      this.getArticles();
      // this.router.navigate(['/articles']);
    }
  }

  onError(error: string) {
    this.error = error;
  }

  reload(): void {
    this.domaineSelected(this.domaineId);
  }
}
