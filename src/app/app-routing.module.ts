import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { AchatsComponent } from './achats/achats.component';
import { HomeComponent } from './home/home.component';
import { ClientGuard } from './guards/client.guard';
import { AuteurGuard } from './guards/auteur.guard';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { PanierComponent } from './panier/panier.component';
import { RedigeComponent } from './redige/redige.component';

const routes: Routes = [
  // @TODO remove HomeComponent
  {path: '',   redirectTo: '/home', pathMatch: 'full'},
  {path: 'home',   redirectTo: '/article/last', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'compte', component: ClientComponent},
  {path: 'achats', component: AchatsComponent, canActivate : [ClientGuard]},
  {path: 'panier', component: PanierComponent},
  {path: 'article', children: [
    {path: '', component: ArticleComponent},
    {path: ':id', component: ArticleComponent},
  ]},
  {path: 'articles', children: [
    {path: '', component: ArticlesComponent},
    {path: 'domaine/:id', component: ArticlesComponent}
  ]},
  {path: 'oeuvres', component: RedigeComponent, canActivate : [AuteurGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
