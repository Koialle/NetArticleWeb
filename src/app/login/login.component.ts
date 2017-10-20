import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../models/client';
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

  constructor(
    private sharedService: SharedService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.title = 'Connexion';
  }

  ngOnInit() {
    this.client = new Client();
  }

  public login(): void {
    this.loginService.getClient(this.loginClient).subscribe(
      (client) => {
        this.client = client;
        if ((this.pwdClient === this.client.pwdClient)) {
          this.sharedService.isConnected = true;
          this.router.navigate(['/home']);
        } else {
          this.error = 'Login ou mot de passe erroné !';
        }
      },
      (error) => {
        this.error = error.message;
      }
    );
  }
}
