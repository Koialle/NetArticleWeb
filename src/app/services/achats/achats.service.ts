import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AchatsService {

  private netArticlesRestUrl = 'http://localhost:8080/NetArticlesRest/webresources/webservice/';
  constructor(private httpClient: HttpClient) { }

  getClientAchats(id: number): Observable<any> {
    return this.httpClient.get(this.netArticlesRestUrl + 'achat/byClient/' + id);
  }

  getAchatsByArticle(id: number): Observable<any> {
    return this.httpClient.get(this.netArticlesRestUrl + 'achat/byArticle/' + id);
  }
}
