import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { AchatsComponent } from './achats/achats.component';
import { AuthGuard } from './guards/auth.guard';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { PanierComponent } from './panier/panier.component';
import { RedigeComponent } from './redige/redige.component';

const routes: Routes = [
  {path: '',   redirectTo: '/article/last', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'compte', component: ClientComponent},
  {path: 'achats', component: AchatsComponent},
  {path: 'article', children: [
    {path: '', component: ArticleComponent},
    {path: ':id', component: ArticleComponent},
  ]},
  {path: 'articles', children: [
    {path: '', component: ArticlesComponent},
    {path: 'domaine/:id', component: ArticlesComponent}
  ]},
  {path: 'panier', children: [
    {path: '', component: PanierComponent},
    {path: 'ajouter/:id', component: PanierComponent},
    {path: 'supprimer/:id', component: PanierComponent},
    {path: 'valider', component: PanierComponent}
  ]},
  {path: 'oeuvres', component: RedigeComponent}
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
