import { Article } from './article';

export class Panier {
  public articles: Article[] = [];
  public total: number = 0;

  public getNbArticles(): number {
    return this.articles.length;
  }

  public getMontantTotal(): number {
    return this.total;
  }

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

  // toJSON is automatically used by JSON.stringify
  toJSON(): Panier {
    // copy all fields from `this` to an empty object and return in
    return Object.assign({}, this);
  }

  // fromJSON is used to convert an serialized version
  // of the Panier to an instance of the class
  static fromJSON(json: JSON|string): Panier {
    if (typeof json === 'string') {
      // if it's a string, parse it first
      return JSON.parse(json, Panier.reviver);
    } else {
      let panier = Object.create(Panier.prototype);
      // copy all the fields from the json object
      return Object.assign(panier, json);
    }
  }

  // reviver can be passed as the second parameter to JSON.parse
  // to automatically call Panier.fromJSON on the resulting value.
  static reviver(key: string, value: any): any {
    return key === "" ? Panier.fromJSON(value) : value;
  }
}
