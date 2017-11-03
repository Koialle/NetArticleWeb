import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Client } from '../../models/client';

@Injectable()
export class ClientService {

  private netArticlesRestUrl = 'http://localhost:8080/NetArticlesRest/webresources/webservice/';
  public headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private client: Client;
  constructor(
    private httpClient: HttpClient
  ) { }

  getClient(id: number): Observable<any> {
    return this.httpClient.get(this.netArticlesRestUrl + 'client/' + id);
  }

  updateClient(client: Client): Observable<any> {
      return this.httpClient.put(this.netArticlesRestUrl + 'modifierClient', JSON.stringify(client), { headers: this.headers });
  }

  addClient(client: Client): Observable<any> {
    return this.httpClient.post(this.netArticlesRestUrl + 'client', JSON.stringify(client), { headers: this.headers });
  }
}
