# React : Le JSX et les composants - Exercice A2 - Les expressions (tableaux et objets)


## Préparation
- Créez un composant nommé "ExerciceA2" dans le dossier `src/components/ExerciceA2`.

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le JSX du composant principal (`src/App.js`) et n'oubliez pas d'importer le composant dans ce fichier.

## Introduction

Dans React, en JSX, les expressions peuvent être n'importe quel expression
valide en JavaScript entourée d'accolades simples `{ 1 + 1 }`.

L'expression entres accolades simples est évaluée et le résultat de cette évaluation est affiché en texte.

L'expression suivante placée dans le JSX retournée par un composant affichera le résultat de l'évaluation de l'expression `1 + 1`.

### Documentation

- Guide : [JSX et les expressions](https://reactjs.org/docs/introducing-jsx.html).
  - [Les expressions valides en JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions).
- [Cheat Sheet](https://devhints.io/react)


## Partie 1

Dans le composant, dans la méthode `render`, créez une constante `promotions`,
de type tableau, qui contient 5 éléments numériques qui sont les 5 dernières années (2018 à 2022).
À l'aide d'une expression affichez votre année de promotion dans un paragraphe du JSX.


## Partie 2

Créez une nouvelle constante « classe » qui est un objet avec des propriétés définissant votre classe :
- Son nom, qui est une chaîne de caractère,
- Sa spécialité, qui est une chaîne de caractère,
- Son nombre d'inscrits, qui est un nombre

À l'aide d'une expression, affichez dans le JSX le nom de votre classe avec sa spécialité sur une même ligne.

Affichez sur une autre ligne le nombre d'inscrits de votre classe.

---

VirtuoWorks® - tous droits réservés©