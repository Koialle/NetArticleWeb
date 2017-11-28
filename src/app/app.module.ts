// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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

// Services
import { SharedService } from './services/shared/shared.service';
import { LoginService } from './services/login/login.service';
import { ClientService } from './services/client/client.service';
import { CategorieService } from './services/categorie/categorie.service';
import { AchatsService } from './services/achats/achats.service';
import { ArticleService } from './services/article/article.service';
import { CommonService } from './services/common/common.service';
import { RedigeService } from './services/redige/redige.service';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { PanierComponent } from './panier/panier.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SharedService,
    LoginService,
    ClientService,
    CategorieService,
    AchatsService,
    AuthGuard,
    ArticleService,
    CommonService,
    RedigeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
