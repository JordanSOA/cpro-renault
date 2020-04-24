# Angular : les liaisons - Exercice B2 - la directive `NgClass`


## Préparation
Créez un nouveau composant nommé "exercice-b2" dans le dossier `src/app/exercices/2-proprietes-evenements/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).

## Introduction
La directive `NgClass` permet d'activer ou désactiver des classes associées à un élément du template. La directive `NgClass` prend comme valeur un objet dont les clés sont des noms de classes et dont les valeurs sont des expressions qui produisent des booléens.

### Exemple
``` html
<div [ngClass]="{'special': isSpecial}"></div>
```

Dans l'exemple ci-dessus, la classe `special` sera appliquée si la valeur de la propriété `isSpecial` est vraie.

On peut ajouter plusieurs classes à cet objet et on peut aussi utiliser des expressions comme :
``` html
<div [ngClass]="{'cool-guy': prenom === 'Douglas', 'js-guru': nom === 'Crockford'}"></div>
```

Dans le cas ci-dessus si le prénom est "Douglas", la div aura la classe `cool-guy` et si le nom est "Crockford", la div aura la classe `js-guru`.

### Documentation
- [`NgClass`](https://angular.io/api/common/NgClass)
- Guide : [`NgClass`](https://angular.io/guide/template-syntax#ngclass)
- MDN : [`<input type="range">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)

## Partie 1
Dans le template, créez une `<div>` affichant la valeur de la propriété numérique `nombre`.

Créez également un `<input>` de type `range` avec pour limites -100 et 100. Liez la valeur `nombre` à cet `<input>`.

À l'aide de la directive `NgClass` appliquez des styles CSS correspondants aux cas suivants :
- Lorsque le nombre est pair, le texte est en vert
- Lorsque le nombre est impair, le texte est en rose
- Lorsque le nombre est supérieur à zéro, la div a une bordure orange
- Lorsque le nombre est inférieur à zéro, la div a une bordure bleue
- Lorsque le nombre est égal à zéro, la div a une bordure grise
