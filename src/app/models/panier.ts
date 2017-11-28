import { Article } from './article';

export class Panier {
  public articles: Article[] = [];
  public total: number = 0;

  // constructor() {
  //   this.articles = [];
  //   this.total = 0;
  // }

  public ajouterArticle(article: Article) {
    if (!this.articles.includes(article)) {
      this.articles.push(article);

      this.plus(article);
    }
  }

  public supprimerArticle(article: Article) {
    if (this.articles.includes(article)) {
      var predicate = function (article) {
        return this.idArticle == article.idArticle;
      }
      let index = this.articles.findIndex(predicate);
      this.articles.splice(index, 1);
    }
  }

  private plus(article: Article) {
    this.total += article.prix;
  }

  private minus(article: Article) {
    this.total -= article.prix;
  }
}
