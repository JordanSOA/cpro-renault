# Angular : Les expressions - Exercice A4 - La directive `NgModel`


## Préparation
Créez un nouveau composant nommé "exercice-a4" dans le dossier `src/app/exercices/1-expressions/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).

## Introduction

### La directive `NgModel`

La directive `NgModel` permet d'afficher la valeur d'une propriété de la classe et de refléter automatiquement la nouvelle valeur si l'utilisateur la modifie. De même la valeur sera mise à jour dans le template si elle est modifiée dans la classe (par exemple via un _setter_ ou un appel à une méthode de la classe).

La directive `NgModel` permet communément d'associer le contenu d'un champ de formulaire de type `input`, `select` ou `textarea` à une propriété de classe et d'effectuer automatiquement la liaison de données dans les 2 sens : de la classe vers le template, ou du template vers la classe.

### Exemple
``` html
<input type="password" name="my-password" [(ngModel)]="userPassword">
```

**Note :** La directive `NgModel` fait partie de la gestion des formulaires dans Angular, pour l'utiliser nous devons importer le module `FormsModule` dans notre application. Dans le module principal (défini dans le fichier `src/app/app.module.ts`) ajoutez le module `FormsModule` à la liste des imports.

### Documentation
- Guide : [La directive `ngModel`](https://angular.io/guide/template-syntax#ngModel).
- Guide : [La liaison de données dans les 2 sens](https://angular.io/guide/template-syntax#two-way-binding-).


## Partie 1

Dans la classe, créez une propriété texte destinée à contenir un prénom.

Dans le template, créez un champ input auquel vous associerez la valeur de la prpriété de la classe.

Créez un élément `h2` au dessus du champ texte contenant le mot "bonjour".

Faites en sorte que la valeur courante du champ s'affiche dans le `<h2>` après le mot "bonjour".

---

VirtuoWorks® - tous droits réservés©