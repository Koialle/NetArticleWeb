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
import { AchatsComponent } from './achats/achats.component';

// Services
import { SharedService } from './services/shared/shared.service';
import { LoginService } from './services/login/login.service';
import { ClientService } from './services/client/client.service';
import { CategorieService } from './services/categorie/categorie.service';
import { AchatsService } from './services/achats/achats.service';

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
    AchatsComponent
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
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
