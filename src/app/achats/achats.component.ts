import { Component, OnInit } from '@angular/core';
import { Achat } from '../models/achat';
import { Client } from '../models/client';
import { AchatsService } from '../services/achats/achats.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css']
})
export class AchatsComponent implements OnInit {
  public achats: Achat[];
  public error: string;
  public title: string;

  constructor(
    private achatsService: AchatsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {  }

  ngOnInit() {
    this.achats = [];
    let client : Client = JSON.parse(localStorage.getItem('currentClient'));
    this.getAchats(client.idClient);
  }

  getAchats(id: number): void {
    this.title = 'Vos achats';
    this.achatsService.getClientAchats(id).subscribe(
      (achats) => {
        this.achats = achats;
        this.router.navigate(['/achats']);
      },
      (error) => {this.error = error.message; }
    );
  }

  reload(): void {
    let client : Client = JSON.parse(localStorage.getItem('currentClient'));
    this.getAchats(client.idClient);
  }
}
