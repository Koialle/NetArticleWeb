import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Redige } from '../models/redige';
import { RedigeService } from '../services/redige/redige.service';
import { AchatsService } from '../services/achats/achats.service';
import { SharedService } from '../services/shared/shared.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-redige',
  templateUrl: './redige.component.html',
  styleUrls: ['./redige.component.css']
})
export class RedigeComponent implements OnInit {
  public rediges: Redige[];
  public error: string;
  public title: string;
  public totalRoyalties: number;

  constructor(
    private redigeService: RedigeService,
    private sharedService: SharedService,
    private achatsService: AchatsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getOeuvres(this.sharedService.currentAuteur.idAuteur);
  }

  getOeuvres(id: number): void {
    this.title = 'Vos oeuvres';
    this.totalRoyalties = 0;
    this.redigeService.getArticleByAuteur(id).subscribe(
      (redige) => {
        this.rediges = redige;
        const obs = [];
        this.rediges.map((redige)=> {
          obs.push(this.achatsService.getAchatsByArticle(redige.article.idArticle).map((achats) => {
            this.totalRoyalties = this.totalRoyalties + (((redige.part/100)*redige.article.prix)*achats.length);
          }));
        });
        /*obs.map((observable) => {
          observable.subscribe();
        });*/
        Observable.forkJoin(obs).subscribe(()=> {         
          this.router.navigate(['/oeuvres']);
        });
      },
      (error) => {this.error = error.message; }
    );
  }

  reload(): void {
    this.getOeuvres(this.sharedService.currentAuteur.idAuteur);
  }
}
