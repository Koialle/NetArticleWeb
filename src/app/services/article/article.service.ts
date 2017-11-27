import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticleService {
  private restUrl = 'http://localhost:8080/NetArticlesRest/webresources/webservice/';

  constructor(private httpClient: HttpClient) { }

  public getArticle(id: number): Observable<any> {
    return this.httpClient.get(this.restUrl + 'article/' + id);
  }

  public getArticlesByDomaine(domaine_id: number): Observable<any> {
    return this.httpClient.get(this.restUrl + 'article/byDomain/' + domaine_id);
  }

  public getLastArticle(): Observable<any> {
    return this.httpClient.get(this.restUrl + 'article/last');
  }

  public getArticles(): Observable<any> {
    return this.httpClient.get(this.restUrl + 'articles');
  }
}
