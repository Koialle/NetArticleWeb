import { Injectable } from '@angular/core';
import { Client } from '../../models/client';

@Injectable()
export class SharedService {
  public isConnected: boolean;
  public currentClient: Client;
  private originalUrl: string;

  constructor() { }

  public setOriginalUrl(url: string): void {
    this.originalUrl = url;
  }

  public getOriginalUrl() {
    let url: string = this.originalUrl;
    this.originalUrl = '';

    if (url === '') {
      url = '/home';
    }

    return url;
  }
}
