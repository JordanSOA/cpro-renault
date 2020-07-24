# React : Le JSX et les composants - Exercice A6 - les références et le DOM

## Préparation
- Créez un composant nommé "ExerciceA6" dans le dossier `src/components/ExerciceA6`.

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le JSX du
composant principal (`src/App.js`) et n'oubliez pas d'importer le composant dans
ce fichier.

## Introduction
Avec les références, en JSX, on obtient une référence à l'élément HTML qui porte
la référence, on peut donc accéder à toutes les propriétés de cet élément HTML.

Pour utiliser les référence, on doit déclarer 1 propriété du composant qui
contient l'objet fourni par la méthode `React.createRef()`. L'objet fourni par
cette méthode contient une propriété `current` qui contiendra 1 référence à
l'élément HTML associé.

__Attention__, on ne peut accéder à cet élément HTML qu'une fois que le Virtual
DOM a été utilisé par React pour mettre à jour le DOM. Donc on ne peut pas
utiliser directement le références dans des expressions au sein du JSX. Pour
utiliser une référence on passera impérativement par un gestionnaire d'évènement.

Par exemple :

Dans le constructeur du composant on écrit :
``` jsx
contructor() {
  // propriété du composant
  this.reference = React.createRef();
}
```
Et dans la méthode `render` :

Si on écrit :
``` jsx
<input type="text" name="nom" ref={this.reference}/>
{ /* Le DOM n'existe pas encore, le JSX permet de déclarer le DOM Virtuel */ }
{ this.reference.current.name }
{ /* Cette instruction plante, this.reference.current contient null */ }
```

__PLANTE !!!__ Si on essaie d'utiliser la référence directement dans le JSX,
React produit une erreur.

En revanche, on peut écrire :
``` jsx
<input onClick={ () => {
  /**
  * Ce code sera exécuté lorsque l'utilisateur cliquera sur l'élèment.
  * L'élèment sera donc bel et bien créé dans DOM lorsque cette instruction
  * se declenchera.
  */
  window.alert(this.reference.current.name);
} } type="text" name="nom" ref={this.reference}/>
```

### Documentation
- Guide : [les références et le DOM](https://reactjs.org/docs/refs-and-the-dom.html)


## Partie 1
Créez un élément `<h2>` qui contient du texte et qui a un attribut `title` contenant également du texte.

Donnez une référence à cet élément `<h2>` et en utilisant les propriétés DOM correspondantes :
- Affichez au survol du `<h2>`, le contenu texte du `<h2>` dans la console.
- Affichez au click le contenu de l'attribut `title` du `<h2>` dans la console.

---

VirtuoWorks® - tous droits réservés©