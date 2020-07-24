# React : Le JSX et les composants - Exercice A0

## Méthodologie

Pour chaque exercice, les sections utiles de la documentation sont indiquées soit en introduction, soit dans le cadre d'une partie spécifique. Les exercices sont construits de façon progressive et chaque nouvel exercice peut faire appel à des notions vues dans les précédents.


## Préparation

- Créez un nouveau projet React nommé "exercices" avec le [CLI Create React App](https://github.com/facebook/create-react-app).<br>
``` bash
create-react-app exercices
```
- Dans cette application, démarrez le serveur de test.<br>
``` bash
npm start
```
- Créez un composant nommé "ExerciceA0" dans le dossier `src/components/ExerciceA0`. Le fichier dans lequel se trouve le code du composant s'appelle
`index.js`


## Introduction

La façon la plus simple d'afficher une la valeur d'une propriété d'un élément du
DOM Virtuel dans le JSX est d'utiliser une expression valide en JavaScript.

Pour écrire une expression valide, écrivez le nom d'une variable (définie dans la fonction `render`), dans le JSX retourné, entouré d'accolades simples :
<br>
``` jsx
{ maVariable }
```


### Documentation

- Guide : [JSX et les expressions](https://reactjs.org/docs/introducing-jsx.html).
  - [Les expressions valides en JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions).
- [Cheat Sheet](https://devhints.io/react)


## Premiers pas

- Importez votre composant au début du fichier correspondant au composant principal (`App.js`).
- Videz entièrement le JSX retourné par la méthode `render` du composant principal.
- Dans la méthode `render` de votre composant principal, dans le JSX retourné insérez l'élément React correspondant au composant ExerciceA0 que vous avez créé (pseudo-balise `<ExerciceA0/>`).
- Videz entièrement le JSX retourné par la méthode `render` de votre composant
ExerciceA0.
- Dans la méthode `render` de votre composant, créez une nouvelle constante
`titre` contenant le texte "Exercices React" et affichez-la dans dans le JSX en tant que contenu d'une balise `<h1>`.
- Vérifiez que votre composant principal entraîne l'affichage de votre composant.

---

VirtuoWorks® - tous droits réservés©