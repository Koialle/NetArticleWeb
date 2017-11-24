import { Component, OnInit } from '@angular/core';
import { Achats } from '../models/achats';
import { AchatsService } from '../services/achats/achats.service';
import { SharedService } from '../services/shared/shared.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css']
})
export class AchatsComponent implements OnInit {

  public achats: Achats[];
  public error: string;
  public title: string;

  constructor(
    private achatsService: AchatsService,
    private sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {  }

  ngOnInit() {
    this.getAchats(this.sharedService.currentClient.idClient);
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

  télécharger(articleId: number) {
    // TODO
  }

  reload(): void {
     this.getAchats(this.sharedService.currentClient.idClient);
  }
}
