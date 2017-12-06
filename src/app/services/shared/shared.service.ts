import { Injectable } from '@angular/core';
import { Client } from '../../models/client';
import { Auteur } from '../../models/auteur';

@Injectable()
export class SharedService {
  private originalUrl: string;

  public setOriginalUrl(url: string): void {
    this.originalUrl = url;
  }

  public getOriginalUrl() {
    if (this.originalUrl === '') {
      this.originalUrl = '/';
    }

    return this.originalUrl;
  }

  public isConnected() {
    if (localStorage.getItem('currentClient') || localStorage.getItem('currentAuthor')) {
      return true;
    }

    return false;
  }

  public getCurrentUser() {
    return localStorage.getItem('currentClient') || localStorage.getItem('currentAuthor');
  }

  public isAuteurConnected() {
    return localStorage.getItem('currentAuthor') !== null;
  }

  public isClientConnected() {
    return localStorage.getItem('currentClient') !== null;
  }

  public getCurrentClient() {
    return localStorage.getItem('currentClient');
  }

  public getCurrentAuteur() {
    return localStorage.getItem('currentAuthor');
  }

  public setCurrentClient(client: Client) {
    localStorage.setItem('currentClient', JSON.stringify(client));
  }

  public setCurrentAuteur(author: Auteur) {
    localStorage.setItem('currentAuthor', JSON.stringify(author));
  }

  public clearUser(): void {
    localStorage.removeItem('currentClient');
    localStorage.removeItem('currentAuthor');
  }
}
