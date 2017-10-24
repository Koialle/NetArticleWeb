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

// Services
import { SharedService } from './services/shared/shared.service';
import { LoginService } from './services/login/login.service';
import { ArticleService } from './services/article/article.service';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    ArticleComponent
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
    AuthGuard,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
