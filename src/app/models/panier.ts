import { Article } from './article';

export class Panier {
  public articles: Article[] = [];
  public total: number = 0;

  public ajouterArticle(article: Article) {
    if (!this.contains(article)) {
      this.articles.push(article);

      this.plus(article);
    }
  }

  private find(article: Article) {
    return this.articles.find(function(element) {
      return element.idArticle === this.idArticle;
    }, article);
  }

  public contains(article: Article) {
    let a = this.find(article);

    return !(a === undefined);
  }

  public supprimerArticle(article: Article) {
    let index = this.articles.findIndex(function(element, index) {
      return element.idArticle === this.idArticle;
    }, article);

    if (index !== -1) {
      this.articles.splice(index, 1);

      this.minus(article);
    }
  }

  private plus(article: Article) {
    this.total += article.prix;
  }

  private minus(article: Article) {
    this.total -= article.prix;
  }
}
