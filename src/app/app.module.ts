// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ClientComponent } from './client/client.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ArticleComponent } from './article/article.component';
import { DomaineComponent } from './domaine/domaine.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticlesComponent } from './articles/articles.component';

// Services
import { SharedService } from './services/shared/shared.service';
import { LoginService } from './services/login/login.service';
import { ClientService } from './services/client/client.service';
import { CategorieService } from './services/categorie/categorie.service';
import { ArticleService } from './services/article/article.service';
import { CommonService } from './services/common/common.service';

// Guards
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    ClientComponent,
    CategorieComponent,
    ArticleComponent,
    DomaineComponent,
    ArticleListComponent,
    ArticlesComponent,
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
    AuthGuard,
    ArticleService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
