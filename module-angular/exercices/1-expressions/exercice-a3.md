# Angular : les expressions - Exercice 3 - L’interpolation (invocation de méthodes)

## Préparation
Créez un nouveau composant nommé "exercice-a3" dans le dossier `src/app/exercices/1-expressions/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).

## Introduction

Les interpolations peuvent également être utiliser pour *invoker* (c'est à dire entraîner l'exécution de) des méthodes du composant correspondant au template.

L'interpolation affichera alors la valeur de retour de la méthode invoquée.

### Documentation
- Guide : [L'interpolation et les expressions de template](https://angular.io/guide/template-syntax).
  - [Les expressions de template](https://angular.io/guide/template-syntax#template-expressions).

## Partie 1

* Déclarez une méthode du composant qui retourne le texte `Bonjour !`, et utilisez
  une interpolation pour *invoquer* cette méthode à partir d'une expression depuis le
  template.

* Déclarez une méthode du composant qui prend en argument 2 nombres et qui retourne
  le résultat de la division du premier nombre par le second. Utilisez une interpolation
  pour *invoquer* cette méthode à partir d'une expression depuis le template.

* Déclarez une méthode du composant qui prend en argument 1 Array de chaîne de caractères
  et qui retourne 1 chaîne de caractères qui est la concaténation des chaînes de caractères.
  Utilisez une interpolation pour *invoquer* cette méthode à partir d'une expression depuis
  le template.

---

VirtuoWorks® - tous droits réservés©