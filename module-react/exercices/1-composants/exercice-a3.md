# React : Le JSX et les composants - Exercice A3 - L’interpolation (invocation de méthodes)

## Préparation

- Créez un composant nommé "ExerciceA3" dans le dossier `src/components/ExerciceA3`.

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le JSX du
composant principal (`src/App.js`) et n'oubliez pas d'importer le composant dans
ce fichier.


## Introduction

On peut également utiliser des expression pour *invoker* (c'est à dire entraîner
l'exécution de) de méthodes du composant ou de fonction déclarées
dans la méthode `render`.

L'expression entrainera alors l'affichage de la valeur de retour de la méthode
invoquée.


### Documentation

- Guide : [JSX et les expressions](https://reactjs.org/docs/introducing-jsx.html).
  - [Les expressions valides en JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions).
- [Cheat Sheet](https://devhints.io/react)


## Partie 1

* Déclarez une fonction dans la méthode `render` du composant qui retourne le
* texte `Bonjour !`, et utilisez une expression pour *invoquer* cette méthode
* dans le JSX
 retourné

* Déclarez une fonction dans la méthode `render` du composant qui prend en
  argument 2 nombres et qui retourne le résultat de la division du premier
  nombre par le second. Utilisez une expression pour *invoquer* cette méthode
  dans le JSX retourné.

* Déclarez une fonction dans la méthode `render` du composant qui prend en
  argument 1 Array de chaînes de caractères et qui retourne 1 chaîne de
  caractères qui est la concaténation des chaînes de caractères. Utilisez une
  expression pour *invoquer* cette méthode dans le JSX retourné.


---

VirtuoWorks® - tous droits réservés©