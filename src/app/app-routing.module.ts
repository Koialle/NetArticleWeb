import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  //{path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '',   redirectTo: '/article/last', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'article', children: [
    {path: '', component: ArticleComponent},
    {path: ':id', component: ArticleComponent},
  ]},
  /* {path: 'articles', children: [
    {path: '', component: ArticlesComponent},
    {path: 'domaine/:id', component: ArticleDomaineComponent}
  ]} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
