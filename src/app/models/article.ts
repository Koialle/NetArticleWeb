import { Domaine } from './domaine';

export class Article {
  public idArticle: number;
  public domaine: Domaine;
  public titre: string;
  public resume: string;
  public prix: number;
  public dateArticle: string;
  public fichier: string;
}
