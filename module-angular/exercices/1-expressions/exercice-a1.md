# Angular : Les expressions - Exercice A1


## Préparation
Créez un nouveau composant nommé "exercice-a1" dans le dossier `src/app/exercices/1-expressions/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).

## Introduction
Dans Angular, l'interpolation consiste à évaluer une expression entres doubles accolades `{{ 1 + 1 }}`. L'expression entre accolades est évaluée d'un

L'interpolation consiste à évaluer l'expression entres doubles accolades et à afficher le résultat de cette évaluation en texte.

L'expression suivante placée dans un template de composant affichera le résultat de l'évaluation de l'expression `1 + 1`.

### Dans le template (fichier HTML)
``` html
{{ 1 + 1 }}
```

La syntaxe des expressions de template resemble à celle de JavaScript. De nombreuses expressions JavaScript peuvent être évaluées dans un template Angular via l'interpolation.

Il existe plusieurs exceptions, en particulier on ne peut pas utiliser des expressions qui ont ou qui peuvent avoir des effets secondaires, comme :

- des assignations (`=`, `+=`, `-=`, ...)
- les opérateurs comme `new`, `typeof`, `instanceof`, etc.
- l'incrémentation (`++`) ou la décrémentation ( `--`).
- certains opérateurs ES2015+

### Documentation
- Guide : [L'interpolation et les expressions de template](https://angular.io/guide/template-syntax).
  - [Les expressions de template](https://angular.io/guide/template-syntax#template-expressions).
- Guide : [Les opérateurs d'expressions de template](https://angular.io/guide/template-syntax#template-expression-operators)

## Partie 1

Écrivez chacune des questions suivantes dans un titre `<h2>` dans le template du composant "exercice-a1" :

- Que donne la somme de 36344.789 et 5422.995432 ?
- Que donne la concaténation de "Bonjour" et "le Monde" ?
- Quel est le reste de la division entière de 4321 par 1234 ?
- Est-il vrai que 0.000005 est strictement supérieur à 0.00005 ?
- Que donne l'équation ((3x + 2) - (43x * (9y + 6))) / (2y - 7) si x vaut 4 et y vaut 19. Vous devez donc créer 2 propriétés numériques dans le composant.

Sous chaque question affichez la résponse dans un paragraphe du template à l'aide d'une expression Angular via l'interpolation.

---

VirtuoWorks® - tous droits réservés©