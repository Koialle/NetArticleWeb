import { Component, OnInit } from '@angular/core';
import { Redige } from '../models/redige';
import { RedigeService } from '../services/redige/redige.service';
import { SharedService } from '../services/shared/shared.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-redige',
  templateUrl: './redige.component.html',
  styleUrls: ['./redige.component.css']
})
export class RedigeComponent implements OnInit {
  public redige: Redige[];
  public error: string;
  public title: string;
  public montantVentes: number;

  constructor(
    private redigeService: RedigeService,
    private sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getOeuvres(this.sharedService.currentAuteur.idAuteur);
    this.montantVentes = 0;
  }

  getOeuvres(id: number): void {
    this.title = 'Vos oeuvres';
    this.redigeService.getArticleByAuteur(id).subscribe(
      (redige) => {
        console.log(redige);
        this.redige = redige;
        this.router.navigate(['/oeuvres']);
      },
      (error) => {this.error = error.message; }
    );
  }

  reload(): void {
     this.getOeuvres(this.sharedService.currentAuteur.idAuteur);
  }

}
