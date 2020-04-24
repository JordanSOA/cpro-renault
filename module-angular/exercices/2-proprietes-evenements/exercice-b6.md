# Angular : les liaisons - Exercice B6 - La liaison de propriété (booléens)


## Préparation
Créez un nouveau composant nommé "exercice-b6" dans le dossier `src/app/exercices/2-proprietes-evenements/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).


## Introduction
La liaison de propriété Angular permet de lier des valeurs autres que des valeurs de type texte entre la classe et le template.

En HTML, certains attributs sont de type booléens. Cela signifie que la simple présence de cet attribut sur un élément fait qu'il sera appliqué. C'est le cas de `required`, `checked` ou `disabled`, entre autres. On peut écrire :

``` html
<input type="text" required>
```

pour indiquer que le champ est obligatoire. Même si on écrit `<input type="text" required="false">`, le champ est obligatoire car l'attribut est présent.

Angular permet de gérer l'activation et la désactivation des attributs booléens via la liaison de propriété. Le même attribut pourra être manipulé dynamiquement en liant la propriété `required` à une valeur booléenne.

``` html
<input type="text" [required]="isRequired">
```

Dans le code si dessus, le champ est requis en fonction de la valeur de la propriété `isRequired`, qui peut être modifiée dans la classe, en réaction par exemple à une action utilisateur.

### Documentation
- Guide : [Passer un événement avec `$event`](https://angular.io/guide/user-input#get-user-input-from-the-event-object)
- Guide : [`$event` et les déclarations de gestion d'événements](https://angular.io/guide/template-syntax#event-and-event-handling-statements)
- Spécification HTML : [Les attributs booléens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
- MDN : [L'événement `change`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)


## Partie 1
Créez un formulaire qui contient les champs suivants :

- un champ `checkbox` avec pour label "Je m'abonne à la newsletter", dont la propriété `checked` est liée à la propriété booléenne `newsletter` dans la classe.
- un champ `checkbox` avec pour label "J'accepte les CGU" dont la propriété `checked` est liée à la propriété booléenne `cgu` dans la classe.
- un bouton dont la propriété `disabled` est liée à la propriété booléenne `valide` dans la classe.


## Partie 2
En utilisant la liaison événementielle, observez les changements d'état des `checkbox` et faites en sort que le bouton ne soit cliquable que lorsque les deux valeurs `newsletter` et `cgu` sont vraies.
