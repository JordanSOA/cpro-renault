# Angular : Les liaisons - Exercice B1 - la liaison de propriété (_property binding_)


## Préparation
Créez un nouveau composant nommé "exercice-b1" dans le dossier `src/app/exercices/2-proprietes-evenements/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).


## Introduction

En HTML on peut définir les propriétés de certains éléments en utilisant des attributs dans la balise ouvrante de cet élément, comme l'attribut `src` pour la balise `img`, qui permet de spécifier la source de l'image à afficher. La valeur d'un attribut HTML est toujours du texte.

Angular permet de lier une _propriété_ d'un élément DOM à une propriété de la classe du composant. Cela signifie qu'on peut lier tout type de donnée, y compris des tableaux, des objets ou des booléens.

### Différence entre _attribut_ HTML et _propriété_ d'un objet DOM
Un **attribut** est une partie de la balise, écrite en texte dans le code source, qui sert à générer le DOM. Une **propriété** d'un élément est une propriété d'un objet généré par le DOM et manipulable en JavaScript. Les attributs sont un moyen pour fournir des valeurs aux éléments du DOM. Par exemple, l'attribut `src` en texte dans le code source fournit la valeur associée à la propriété du même nom pour le nœud DOM de type `Image` créé par le navigateur.

Angular s'inspire de cette syntaxe familiaire, celle des attributs, pour nous permettre de manipuler dynamiquement des propriétés des éléments DOM.

### Exemple
Lorsqu'on veut affecter la valeur d'une propriété d'élément à partir d'une propriété du composant on utilise des crochets `[]`, par exemple pour la propriété `src` d'une image on écrira :

``` html
<img [src]="monImage" alt="">
```

Dans l'exemple ci-dessus la propriété `monImage` contient soit une chaîne de caractères (qui pourra être utilisée directement), soit une expression qui sera évaluée par Angular pour obtenir une chaîne de caractères, puisque la valeur `src` est toujours du texte. Si on oublie les crochets, la propriété `src` de l'image au pour valeur la chaîne "monImage"...

**Note :** La liaison de propriété lie une valeur dans un seul sens : de la propriété du composant (dans la classe) vers la propriété de l'élément (dans le template).

### Documentation
- Guide : [La liaison de propriété](https://angular.io/guide/template-syntax#property-binding).


## Partie 1
Trouvez sur Internet une image de chien et utilisez son URL comme valeur d'une propriété `chien` dans votre composant.

Dans le template, créez une balise `img` qui utilise la liaison de propriété pour afficher l'image du chien.


## Partie 2
Trouvez sur Internet 3 images de chats et initialisez dans le composant un tableau à 3 éléments, nommé `chats`, qui sont les URLs de ces 3 images.

Dans le template, créez 3 balises `img` qui utilisent la liaison de propriété pour afficher chacune une image de chat issue de votre tableau.


## Partie 3

Améliorez votre template en limitant les répétitions : utilisez la directive `NgFor`.

---

VirtuoWorks® - tous droits réservés©