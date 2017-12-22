# NetArticleWeb
Migration d'une application front-end JEE en Angular2 réalisé dans le cadre de Polytech, par Mélanie DUBREUIL et Ophélie EOUZAN 5APP.

- [Pré-requis](README.md)
- [Installation de la partie front-end](README.md)
- [Installation de la partie back-end](README.md)
- [Documentation de la fonctionnalité ajoutée](README.md)
- [Fonctionnalités](README.md)

****************************************************************************************************************************************
## Pré-requis
__Front-end__
- NodeJS (version utilisée : v8.9.1) : https://www.npmjs.com/
- Npm (version utilisée : 5.5.1) : `npm install npm@latest -g`
- AngularCli (version utilisée : 1.4.2) : `npm install -g @angular/cli@latest`

__Backend-end__
- Code source : [Koialle/NetArticlesRest](https://github.com/Koialle/NetArticlesRest)
- Glassfish server 4.1
- Netbeans (version utilisée 8.0.2)
- Base de données MySQL
- Pilote mysql présent dans le dossier lib du serveur glassfish : [Téléchargement](https://dev.mysql.com/downloads/connector/j/)
- ArticlesPool créé dans l'interface d'administration de Glassfish (JDBC Connection Pool)
- jdbc/Articles créé dans l'interface d'administration de Glassfish (JDBC Resource)

***
## Installation de la partie front-end
__/!\ Requiert la partie back-end pour fonctionner__
1. Télécharger le code-source de l'application sur ce repository git (branche master)
2. Naviguer dans le dossier `NetArticleWeb` avec un invite de commande
3. Installer les dépendances : `npm install`
4. Lancer l'application : `ng serve`
5. Ouvrir un navigateur à l'adresse suivante : `http://localhost:4200/`

***
## Installation de la partie back-end
1. S'assurer que le script suivant est bien importé dans la base de données mysql : [Script](https://github.com/PolytechLyonInfo/TP_SPA/blob/master/net_articles.sql)
2. Effectuer une sauvegarde de votre application NetArticlesRest
3. Télécharger le code-source du back-end sur ce [repository git](https://github.com/Koialle/NetArticlesRest) (branche master)
4. Remplacer le dossier `/src` par celui téléchargé précédemment
5. Déployer l'application sur le serveur glassfish

***
## Documentation de la fonctionnalité ajoutée
### Objectif de la fonctionnalité
Etant donné que NetArticlesWeb est un site de e-commerce, il nous a paru interessant d'internationnaliser notre site. L'objectif était donc de traduire notre site en deux langues : l'anglais et le français ainsi que le passage d'une langue à l'autre via un bouton. La traduction ne comprend pas les informations retournées par le back-end comme les informations relatives aux articles.

### Technologie utilisée
Nous avons choisi d'utiliser la librairie [ngx-translate i18n](https://github.com/ngx-translate/core/blob/fb02ca5920aae405048ebab50e09db67d5bf12a2/README.md) afin de mettre en place cette fonctionnalité.
Un exemple d'utilisation de la librairie (sur lequel nous nous sommes basées) peut être consulté ici >> https://plnkr.co/edit/WccVZSBM0rUgq2sXSUbe?p=preview

### Apports de cette technologie
La librairie nous a permis de mettre en place la traduction de notre site de manière très simple, intuitive et propre. De plus, elle gère le chargement dynamique des traductions dans l'application et permet de changer de langue facilement.

### Mise en place de la technologie
1. Installer la librairie : `npm install ng2-translate --save`
2. Importer la librairie dans app.module.ts
Par défaut, la librairie utilise `TranslateStaticLoader` pour charger les fichiers de traduction.
```javascript
// Import des modules
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';

// Fonction permettant le chargement des fichiers de traduction json
// Le chemin renseigné doit correspondre à l'endroit où vous souhaitez mettre les fichiers de traduction
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/resources/i18n', '.json');
}

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        TranslateModule.forRoot({
         provide: TranslateLoader,
         useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/resources/i18n', '.json'),
         deps: [Http]
  })
    ],
    bootstrap: [AppComponent]
})
 ```
 __NB : ngx-translate requiert `HttpModule`, ne pas oublier de l'importer__
3. Importer la librairie dans app.component.ts, puis dans le constructeur, indiquer quelles langues sont supportées et laquelle utiliser
```javascript
import {TranslateService} from 'ng2-translate';

 export class AppComponent {
     constructor(translate: TranslateService) {
     translate.addLangs(["en", "fr"]); // Langues supportées
     translate.setDefaultLang('en'); // Langue par défaut
     translate.use('en'); // Langue utilisée
  }
 }
 ```
4. Création des fichiers de traduction (.json)
Ces fichiers doivent être créés dans le chemin renseigné à l'étape (2). Pour chaque langue supportée, il faut créer un fichier json différent. Le format de ces fichiers est le suivant :
```json
{
    "clé": "valeur"
}
```
Il s'agit donc d'un objet json faisant correspondre à chaque clé, une valeur. Par exemple, si nous souhaitons traduire le titre principal de l'application, on peut le définir de la manière suivante.
```json
// fr.json
{
    "MAINTITLE": "Superbe application"
}
```
De la même manière, sa traduction en anglais :
```json
// en.json
{
    "MAINTITLE": "Great application"
}
```
5. Utilisation de la traduction dans l'application :
`<div>{{ 'MAINTITLE' | translate }}</div>`

***
## Fonctionnalités
###__Auteur__
Exemple d'utilisateur : jean dhort
- [x] : liste des ouvrages auxquels il a participé
- [x] : montant total de ses droits d'auteurs perçus sur les ventes réalisées
- [x] : dernier article paru sur le site

###__Client__
Exemple d'utilisateur : paul auchon
- [x] : dernier article paru sur le site
- [x] : recherche des articles par domaine
- [x] : consultation du détail d'un article
- [x] : consulter la liste des articles achetés
- [x] : télécharger un article acheté
- [x] : modifier ses informations clients
- [x] : ajouter un.des article.s au panier
- [x] : acheter un.des article.s

###__Autre__
Utilisateur non-connecté
- [x] : création de compte
- [x] : recherche des articles par domaine
- [x] : ajouter un.des article.s au panier
Sur toute l'application
- [x] : utilisation de guards pour sécuriser l'application
- [x] : utilisation du localStorage pour gérer le panier ainsi que les sessions
