import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  //@TODO remove HomeComponent
  {path: '',   redirectTo: '/home', pathMatch: 'full'},
  {path: 'home',   redirectTo: '/article/last', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'compte', component: ClientComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'article', children: [
    {path: '', component: ArticleComponent},
    {path: ':id', component: ArticleComponent},
  ]},
  {path: 'articles', children: [
    {path: '', component: ArticlesComponent},
    {path: 'domaine/:id', component: ArticlesComponent}
  ]}
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
