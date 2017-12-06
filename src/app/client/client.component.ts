import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from '../services/shared/shared.service';
import { ClientService } from '../services/client/client.service';
import { CategorieService } from '../services/categorie/categorie.service';
import { LoginService } from '../services/login/login.service';
import { Client } from '../models/client';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public client: Client;
  public error: string;
  public title: string;
  public client_id: number;

  constructor(
    private sharedService: SharedService,
    private clientService: ClientService,
    private categorieService: CategorieService,
    private loginService: LoginService,
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.client = new Client();
    this.client.categorie = new Categorie();
    if (this.sharedService.isClientConnected()) {
      this.client = JSON.parse(this.sharedService.getCurrentClient());
      this.title = 'Modifiez vos informations personelles';
    } else {
      this.title = 'Créer un compte client';
    }
  }

  validateClient(id: number) {
    if (this.client.categorie === undefined) {
      this.error = 'Vous devez sélectionner une catégorie !';
    } else if (id > 0) {
      this.clientService.updateClient(this.client).subscribe(() => {
          this.sharedService.setCurrentClient(this.client);
          this.router.navigate(['/']);
        },
        error => {
          this.error = error.message;
        }
      );
    } else {
      this.clientService.addClient(this.client).
        subscribe(() => {
          this.loginService.getClient(this.client.loginClient).subscribe(
            (client) => {
              this.client = client;
              this.sharedService.setCurrentClient(this.client);
              this.router.navigate(['/']);
            },
            (error) => {
              this.error = error.message;
            }
          );
        },
        error => { this.error = error.message; });
    }
  }

  categorieSelected(categorie_id: number): void {
    if (categorie_id) {
      this.categorieService.getCategorie(categorie_id).subscribe(
        (categorie) => { this.client.categorie = categorie; },
        (error) => { this.error = error.message; }
      );
    } else {
      this.client.categorie.idCategorie = undefined;
    }
  }

  isCategorieSelected(): boolean {
    if (!isNaN(this.client.categorie.idCategorie)) {
      return true;
    } else {
      return false;
    }
  }

  cancel(id: number) {
    if (id > 0) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }
}
