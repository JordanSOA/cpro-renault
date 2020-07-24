# React : Le JSX et les composants - Exercice A5 - les affichages conditionnels


## Préparation

- Créez un composant nommé "ExerciceA5" dans le dossier `src/components/ExerciceA5`.

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le JSX du
composant principal (`src/App.js`) et n'oubliez pas d'importer le composant dans
ce fichier.


## Introduction

Pour supprimer ou insérer un élément du Virtual DOM en JSX, on utilise les
opérateurs logiques pour écrire une expression qui retourne 1 des opérandes de
l'opération logique.

Par exemple :

``` jsx
  <div>
    { true && <p>Visible</p> }
  </div>
```
Dans ce cas le paragraphe est retourné par l'opération logique. Mais :

``` jsx
  <div>
    { false && <p>Invisible</p> }
  </div>
```

Dans ce cas le paragraphe n'est pas retourné par l'opération logique.

Si élément n'est pas retourné par l'opération logique, il ne sera pas contenu
dans le Virtual DOM et ne sera donc pas rendu par React sur l'affichage. En
revanche, si élément est retourné par l'opération logique, il sera contenu dans
le Virtual DOM est sera rendu par React sur l'affichage.


### Documentation

- Guide : [Utilisation des Opérateurs logiques](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator)


## Partie 1 : Un peu de JSX

Créez 4 `div` auxquelles vous affecterez des propriétés de style de telle sorte
qu'elles s'affichent sous la forme de 4 ronds de couleur (rouge, vert, bleu et
jaune).


## Partie 2 : Travailler la logique

Créez une constante contenant le booléen `false`.

En utilisant la constante et les 4 `div` __dans le même ordre à chaque fois__ :
- écrivez l'expression contenant le calcul logique permet de n'afficher que la
  div rouge;
- puis écrivez l'expression contenant le calcul logique qui permet de __ne pas__
  afficher la div verte;
- puis écrivez l'expression contenant le calcul logique qui permet d'afficher
  la div bleu;
- et enfin qui permet d'afficher la div jaune.

Indication : Les calculs logiques peuvent être complexe. Exemple :
`{{ 1 && "a" && "b" }}` donne `"b"` alors que `{{ 1 && "a" || "b" }}`
donne `"a"`.


---

VirtuoWorks® - tous droits réservés©