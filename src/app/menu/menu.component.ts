import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared/shared.service';
import {TranslateService} from 'ng2-translate';
import { PanierService } from '../services/panier/panier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    public sharedService: SharedService,
    private router: Router,
    public panierService: PanierService){
      translate.addLangs(["en", "fr"]);
      translate.setDefaultLang('en');
      if (!localStorage.getItem('lang')) {
        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
      } else {
        translate.use(localStorage.getItem('lang'));
      }    
  }

  ngOnInit() {
  }

  public logout(): void {
    this.sharedService.clearUser();
    this.router.navigate(['/']);
  }

  public isLogged(): boolean {
    return this.sharedService.isConnected();
  }

  public isAuthor(): boolean {
    return this.sharedService.isAuteurConnected();
  }

  public isClient(): boolean {
    return this.sharedService.isClientConnected();
  }

  public changerLangue(value: string): void {
    // Save language to keep it if user refresh browser
    localStorage.setItem('lang', value);
    window.location.reload();
  }
}
