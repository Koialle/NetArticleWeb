import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  public isConnected: boolean;
  private originalUrl: string;

  constructor() { }

  public setOriginalUrl(url: string): void {
    this.originalUrl = url;
  }

  public getOriginalUrl() {
    let url: string = this.originalUrl;
    this.originalUrl = '';

    if (url === '') url = '/home';

    return url;
  }

}
