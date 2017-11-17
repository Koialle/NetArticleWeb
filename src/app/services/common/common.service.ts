import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonService {

  private restUrl = 'http://localhost:8080/NetArticlesRest/webresources/webservice/';
  
  constructor(private httpClient: HttpClient) { }

  getDomaines(): Observable<any> {
    return this.httpClient.get(this.restUrl + 'domaine');
  }

  getCategories(): Observable<any> {
    return this.httpClient.get(this.restUrl + 'categorie');
  }
}
