import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Article } from '../models/article';
import { ArticleService } from '../services/article/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public article: Article;
  public error: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    //private location: Location,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.error = "";
    this.article = new Article();
    let articleId = +this.activatedRoute.snapshot.paramMap.get('id');

    if (articleId > 0) {
      this.getArticle(articleId);
    } else {
      this.getLastArticle();
    }
  }

  getLastArticle() {
    return this.articleService.getLastArticle().subscribe(
      (article) => {
        this.article = article;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  getArticle(id: number) {
    return this.articleService.getArticle(id).subscribe(
      (article) => {
        this.article = article;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

}