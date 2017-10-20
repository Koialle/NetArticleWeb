import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { SharedService } from '../services/shared/shared.service';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userlogin = 'admin';
  public userpwd = 'secret';
  public error: string;
  public title: string;
  private user: User;

  constructor(
    private sharedService: SharedService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.title = 'Connexion';
  }

  ngOnInit() {
    this.user = new User();
  }

  public login(): void {
    this.loginService.getUser(this.userlogin).subscribe(
      (user) => {
        this.user = user;
        if ((this.userpwd === this.user.userpwd)) {
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
