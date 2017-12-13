// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';

// Components
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ClientComponent } from './client/client.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AchatsComponent } from './achats/achats.component';
import { ArticleComponent } from './article/article.component';
import { DomaineComponent } from './domaine/domaine.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticlesComponent } from './articles/articles.component';
import { RedigeComponent } from './redige/redige.component';
import { PanierComponent } from './panier/panier.component';

// Services
import { SharedService } from './services/shared/shared.service';
import { LoginService } from './services/login/login.service';
import { ClientService } from './services/client/client.service';
import { CategorieService } from './services/categorie/categorie.service';
import { AchatsService } from './services/achats/achats.service';
import { ArticleService } from './services/article/article.service';
import { CommonService } from './services/common/common.service';
import { RedigeService } from './services/redige/redige.service';
import { PanierService } from './services/panier/panier.service';

// Guards
import { ClientGuard } from './guards/client.guard';
import { AuteurGuard } from './guards/auteur.guard';
import { FooterComponent } from './footer/footer.component';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/resources/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    MenuComponent,
    ClientComponent,
    CategorieComponent,
    ArticleComponent,
    DomaineComponent,
    ArticleListComponent,
    ArticlesComponent,
    PanierComponent,
    AchatsComponent,
    RedigeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  providers: [
    SharedService,
    LoginService,
    ClientService,
    CategorieService,
    AchatsService,
    ClientGuard,
    AuteurGuard,
    ArticleService,
    CommonService,
    RedigeService,
    PanierService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
