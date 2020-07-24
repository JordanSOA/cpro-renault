# React : Le JSX et les composants - Exercice A1


## Préparation

- Créez un composant nommé "ExerciceA1" dans le dossier `src/components/ExerciceA1`.

Pour afficher ce composant, ajoutez la pseudo balise correspondante dans le JSX
du composant principal (`src/App.js`) et n'oubliez pas d'importer le composant dans ce fichier.

## Introduction

Dans React, en JSX, les expressions peuvent être n'importe quel expression
valide en JavaScript entourée d'accolades simples `{ 1 + 1 }`.

L'expression entres accolades simples est évaluée et le résultat de cette évaluation est affiché en texte.

L'expression suivante placée dans le JSX retournée par un composant affichera le résultat de l'évaluation de l'expression `1 + 1`.

### Dans le JSX (dans la méthode `render` du composant)
``` jsx
{ 1 + 1 }
```

### Documentation

- Guide : [JSX et les expressions](https://reactjs.org/docs/introducing-jsx.html).
  - [Les expressions valides en JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions).
- [Cheat Sheet](https://devhints.io/react)

## Partie 1

Écrivez chacune des questions suivantes dans un titre `<h2>` dans le JSX
retourné par la méthode `render` du composant "ExerciceA1" :

- Que donne la somme de 36344.789 et 5422.995432 ?
- Que donne la concaténation de "Bonjour" et "le Monde" ?
- Quel est le reste de la division entière de 4321 par 1234 ?
- Est-il vrai que 0.000005 est strictement supérieur à 0.00005 ?
- Que donne l'équation ((3x + 2) - (43x * (9y + 6))) / (2y - 7) si x vaut 4 et y vaut 19. Vous devez donc créer 2 constantes numériques dans la méthode
 `render` du composant.

Sous chaque question affichez la réponse dans un paragraphe à l'aide d'une expression.

Insérez le composant "ExerciceA1" dans le JSX retourné par le composant principal.

---

VirtuoWorks® - tous droits réservés©