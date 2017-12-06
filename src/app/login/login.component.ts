import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../models/client';
import { Auteur } from '../models/auteur';
import { SharedService } from '../services/shared/shared.service';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginClient: string;
  public pwdClient: string;
  public error: string;
  public title: string;
  private client: Client;
  private auteur: Auteur;
  public isAuteur: boolean;

  constructor(
    private sharedService: SharedService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.title = 'Connexion';
  }

  ngOnInit() {
    this.client = new Client();
    this.auteur  = new Auteur();
    this.isAuteur = false;
  }

  public login(): void {
    if (!this.isAuteur) {
      this.loginService.getClient(this.loginClient).subscribe(
        (client) => {
          this.client = client;
          if ((this.pwdClient === this.client.pwdClient)) {
            this.sharedService.isConnected = true;
            this.sharedService.setCurrentClient(client);
            this.router.navigate(['/']);
          } else {
            this.error = 'Login ou mot de passe erroné !';
          }
        },
        (error) => {
          this.error = error.message;
        }
      );
    } else {
      this.loginService.getAuteur(this.loginClient).subscribe(
        (auteur) => {
          this.auteur = auteur;
          if ((this.pwdClient === this.auteur.pwdAuteur)) {
            this.sharedService.isConnected = true;
            this.sharedService.currentAuteur = this.auteur;
            this.router.navigate(['/']);
          } else {
            this.error = 'Login ou mot de passe erroné ! Êtes-vous certain.e d\être auteur.e ?';
          }
        },
        (error) => {
          this.error = error.message;
        }
      );
    }
  }
}
