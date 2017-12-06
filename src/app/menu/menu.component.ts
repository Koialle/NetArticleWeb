import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared/shared.service';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    public sharedService: SharedService){
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
    this.sharedService.isConnected = false;
    this.sharedService.currentClient = null;
    this.sharedService.currentAuteur = null;
  }

  public logout(): void {
    this.sharedService.isConnected = false;
    this.sharedService.currentAuteur = null;
  }

  public changerLangue(value: string): void {
    // Save language to keep it if user refresh browser
    localStorage.setItem('lang', value);
    window.location.reload();
  }
}
