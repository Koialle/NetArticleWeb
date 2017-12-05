import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Achat } from '../../models/achat';

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

  acheterArticle(idClient: number, idArticle: number) {
    var achat = new Achat();

    achat.idClient = idClient;
    achat.idArticle = idArticle;

    return this.httpClient.post(this.netArticlesRestUrl + 'acheter', JSON.stringify(achat));
  }
}
