# L'Opérateur de transformation `map`

---

## Présentation

Vous allez travailler avec l'*Opérateur de transformation* `map` qui permet d'appliquer une fonction à chaque valeur émise par un *Observable* et d'émettre chacune des valeurs résultantes sous forme d'*Observable*.

`map` fait partie de la catégorie des __*Pipeable Operators*__, qui permettent de
créer un *Observable* à partir d'un autre *Observable* mais qui transforment
les valeurs émises par rapport à celles émises par l'*Observable* initial.

Pour utiliser un __*Pipeable Operator*__, on fait appel à la méthode `pipe()` de l'*Observable* initial. Il est possible de chaîner plusieurs __*Pipeable Operators*__ en les passant comme arguments successifs à la méthode `pipe()` comme suit :

```js
const observableFinal = observableInitial.pipe(
    operateur1(/* code */),
    operateur2(/* code */),
    operateur3(/* code */),
    ...
);
```

* Illustration  du fonctionnement de `map` (à l'aide d'un *Marble Diagram*) :

    ```
    ObservableA (observable initial) :

    ------1--------------2---------------3------------------------------> temps

    ObservableA.pipe(
      map((valeur) => {
        return 10 * valeur
      })
    )

    ------10-------------20--------------30-----------------------------> temps
    ```

Ci-après la [Documentation pour l'opérateur `map`](https://rxjs-dev.firebaseapp.com/api/operators/map).

## Objectif

Vous devez créer un programme qui détermine si un mot saisi est un palindrome.

Par exemple :
- Est-ce que "POULET" est un palindrome ? ("POULET" à l'envers donne "TELUOP")
    - Non, ce n'est pas un palindrome.
- Est-ce que "KAYAK" est un palindrome ? ("KAYAK" à l'envers donne "KAYAK")
    - Oui, c'est un palindrome.

Ce programme se présentera sous la forme d'un champ de saisi pour la saisie du
mot ainsi que d'un encart pour afficher la réponse appropriée :
- "Oui, c'est un palindrome."

ou alors
- "Non, ce n'est pas un palindrome."

Pour réaliser se programme vous utiliserez `RxJS` avec l'opérateur de création
`fromEvent` et l'opérateur de transformation `map`.

## Enoncé

Créez un champ de saisie dans votre document HTML ainsi qu'un paragraphe de texte.

Utilisez l'opérateur `fromEvent` faire en sorte que :
- au fur et à mesure de la saisie de l'utilisateur, l'évènement soit fourni, à l'aide de la méthode `pipe` à l'opérateur `map`;
- que l'opérateur `map` effectue les comparaisons qui s'imposent pour retourner un
booléen indiquant si la saisie est un palindrome.

L'*Observable* `fromEvent` qui émet de base un événement, émet désormais un
booléen.

La souscription à cet *Observable* reçoit désormais un booléen qui doit être
utilisé pour mettre à jour le paragraphe de texte en affichant la nature de la
saisie.

---

VirtuoWorks® - tous droits réservés©