import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  private netArticlesRestUrl = 'http://localhost:8080/NetArticlesRest/webresources/webservice/';

  constructor(private httpClient: HttpClient) { }

  public getClient(login: string): Observable<any> {
    return this.httpClient.get(this.netArticlesRestUrl + 'connecter/' + login);
  }

  public getAuteur(login: string): Observable<any> {
    return this.httpClient.get(this.netArticlesRestUrl + 'auteur/connecter/' + login);
  }
}
