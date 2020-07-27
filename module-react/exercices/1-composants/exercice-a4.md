# React : Le JSX et les composants - Exercice A4 - les listes


## Préparation
- Créez un composant nommé "ExerciceA4" dans le dossier `src/components/ExerciceA4`.

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le JSX du
composant principal (`src/App.js`) et n'oubliez pas d'importer le composant dans
ce fichier.

## Introduction

Pour créer une répétition d'éléments du DOM Virtuel en JSX, il suffit de créer
un `Array` d'éléments. Chacun de ces éléments doit avoir un attribut `key` avec
une valeur unique identifiante. Cet `Array` doit être utilisé dans une expression
au sein du JSX retourné par le composant.

Par exemple :

``` jsx
return (
  <ul>
    {[
      <li key="pierre">Premier</li>
      <li key="paul">Deuxième</li>
      <li key="jacques">Troisième</li>
    ]}
  </ul>
)
```

Ou encore mieux :

``` jsx
const tableau = [
  <li key="pierre">Premier</li>
  <li key="paul">Deuxième</li>
  <li key="jacques">Troisième</li>
];

return (
  <ul>
    {tableau}
  </ul>
)
```

Enfin encore meilleur (approche recommandée) :

``` jsx
const liste = [{
  clé:'pierre',
  texte:'Premier'
}, {
  clé:'paul',
  texte:'Deuxième'
}, {
  clé:'jacques',
  texte:'Troisième'
}];

// La méthode .map() retourne un Array comparable à celui de l'exemple précédent.
const tableau = liste.map((pourUnObjetDeLaListe, indiceDeObjet) => {
  return <li key={pourUnObjetDeLaListe.clé}>{pourUnObjetDeLaListe.texte}</li>
});

return (
  <ul>
    {tableau}
  </ul>
)
```


### Documentation
- Guide : [Les listes et les clés](https://reactjs.org/docs/lists-and-keys.html).
- Documentation : [La méthode `.map()` des `Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)


## Partie 1

Créez une nouvelle constante « classe » qui est un objet avec des propriétés
définissant votre classe :
- Son nom, qui est une chaîne de caractère,
- Sa spécialité, qui est une chaîne de caractère,
- La liste des inscrits, qui est un tableau contenant au moins 3 objets
  représentant des élèves.
  Chaque élève possède les caractéristiques suivantes :
  - Son prénom, qui est une chaîne de caractère;
  - Son nom, qui est une chaîne de caractère;
  - Son âge, qui est un nombre.


## Partie 2
À l'aide d'une expression, affichez dans le JSX pour chaque élève, son prénom,
son nom et son âge, en utilisant la technique pour l'affichage des listes.
Vérifiez que vous n'avez pas d'erreur ou de message d'alerte dans la console.


## Partie 3
À l'aide d'une expression, affichez à l'intérieur d'un paragraphe de texte le
nombre d'inscrits (vous devez vous baser sur le tableau des inscrits pour
obtenir cette information).

---

VirtuoWorks® - tous droits réservés©