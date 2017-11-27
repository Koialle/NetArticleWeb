import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RedigeService {
  private restUrl = 'http://localhost:8080/NetArticlesRest/webresources/webservice/';
  
  constructor(private httpClient: HttpClient) { }

  public getArticleByAuteur(id: number): Observable<any> {
    return this.httpClient.get(this.restUrl + 'auteur/redige/' + id);
  }
}
