import { Injectable } from '@angular/core';
import { Client } from '../../models/client';
import { Auteur } from '../../models/auteur';

@Injectable()
export class SharedService {
  public isConnected: boolean;
  public currentClient: Client;
  public currentAuteur: Auteur;
  private originalUrl: string;

  public setOriginalUrl(url: string): void {
    this.originalUrl = url;
  }

  public getOriginalUrl() {
    let url: string = this.originalUrl;
    this.originalUrl = '';

    if (url === '') {
      url = '/';
    }

    return url;
  }

  public setCurrentClient(client: Client): void {
    this.currentClient = client;
  }

  public getCurrentClient() {
    if(this.currentClient){      
      return this.currentClient;
    } else {
      return undefined;
    }
  }
}
