# Angular : les expressions - Exercice A6 - les références de template


## Préparation
Créez un nouveau composant nommé "exercice-a6" dans le dossier `src/app/exercices/2-proprietes-evenements/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).


## Introduction
Avec les références de template on obtient une référence à l'élément HTML qui porte la référence, on peut donc accéder à toutes les propriétés de cet élément HTML.

``` html
<input type="text" name="nom" #inputElementRef>
{{ inputElementRef.name }} <!-- Affichera "nom" qui est la valeur de l'attribut "name" qui est une propriété de l'input (objet DOM) -->
```

**Note :** Le nom de la référence est une variable valide dans le contexte du template. Le nom de cette variable doit être unique poour ne pas entrer en conflit avec d'autres références dand le même template.

**Note :** Les références de template peuvent aussi pointer vers des directives (comme `ngModel`) qui fournissent un contenu différent de l'élément HTML.

### Documentation
- Guide : [les références de template (_`template reference variable`_)](https://angular.io/guide/template-syntax#template-reference-variables-var)


## Partie 1
Créez un élément `<h2>` qui contient du texte et qui a un attribut `title` contenant également du texte.

Donnez une référence de template à cet élément `<h2>` et affichez en dessous, en utilisant les propriétés DOM correspondantes :
- le contenu texte du `<h2>`
- le contenu de l'attribut `title` du `<h2>`

---

VirtuoWorks® - tous droits réservés©