# React : Le JSX et les composants - Exercice A4 - les listes


## Préparation
- Créez un composant nommé "ExerciceA4" dans le dossier `src/components/ExerciceA4`.

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le JSX du composant principal (`src/App.js`) et n'oubliez pas d'importer le composant dans ce fichier.

## Introduction

La directive `NgFor` permet de répéter un élément du DOM pour chaque élément d'une collection (tableau ou autre objet itérable).

### Documentation
- Guide : [La directive NgFor](https://angular.io/guide/template-syntax#ngfor).
- Guide : [La microsyntaxe NgFor](https://angular.io/guide/structural-directives#inside-ngfor).


## Partie 1
Créez une nouvelle propriété « classe » qui est un objet avec des propriétés définisant votre classe :
- Son nom, qui est une chaîne de caractère,
- Sa spécialité, qui est une chaîne de caractère,
- La liste des inscrits, qui est un tableau contenant au moins 3 objets représentant des élèves.
  Chqaue élève possède les caractéristiques suivantes :
  - Son prénom, qui est une chaîne de caractère;
  - Son nom, qui est une chaîne de caractère;
  - Son âge, qui est un nombre.


## Partie 2
À l'aide d'une expression, affichez dans le template pour chaque élève, son prénom, son nom et son âge, en utilisant la directive `NgFor`.


## Partie 3
À l'aide d'une expression, affichez à l'intérieur d'un paragraphe de texte le nombre d'inscrits (vous devez vous baser sur le tableau des inscrits pour obtenir cette information).

---

VirtuoWorks® - tous droits réservés©