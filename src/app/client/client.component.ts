import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from '../services/shared/shared.service';
import { ClientService } from '../services/client/client.service';
import { Client } from '../models/client';

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
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.client = new Client();
    this.client_id = +this.activatedRoute.snapshot.paramMap.get('client_id');
    if (this.client_id > 0) {
      this.title = 'Modifier vos informations personelles';
      this.getClient(this.client_id);
    } else {
      this.title = 'Créer un compte client';
    }
  }

  getClient(id: number) {
    this.clientService.getClient(id).subscribe(
      (client) => { this.client = client; },
      (error) => { this.error = error.message; }
    );
  }

  validateClient(id: number) {
    if (id > 0) {
      if (this.client.categorie === undefined) {
        this.error = 'Vous devez sélectionner un job !';
      } else {
        this.clientService.updateClient(this.client).
          subscribe(() => {
            const originalUrl: string = this.sharedService.getOriginalUrl();
            this.router.navigate([originalUrl]);
          },
          error => { this.error = error.message; });
      }
    } else {
      this.clientService.addClient(this.client).
        subscribe(() => { },
        error => { this.error = error.message; },
        () => {
          this.router.navigate(['/']);
        });
    }
  }

  categorieSelected(categorie_id: number): void {
    console.log(categorie_id);
  }

  cancel(id: number) {
    if (id > 0) {
      this.location.back();
    } else {
      this.router.navigate(['/home']);
    }
  }
}
