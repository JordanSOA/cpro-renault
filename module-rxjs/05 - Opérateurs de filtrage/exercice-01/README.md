# L'Opérateur de filtrage `filter`

---

## Présentation

Vous allez travailler avec l'*Opérateur de filtrage* `filter` qui permet de ne conserver que les valeurs émises par un *Observable* qui remplissent une condition donnée.

`filter` fait partie de la catégorie des __*Pipeable Operators*__, qui permettent de
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

* Illustration  du fonctionnement (à l'aide d'un *Marble Diagram*) :

    ```
    observableA (Observable initial) :

    ------0---------1---------2---------3---------4---------5-----------> temps

    observableA.pipe(filter(valeur => valeur % 2 === 0))

    ------0-------------------2-------------------4---------------------> temps
    ```

Ci-après la [Documentation pour l'opérateur `filter`](https://rxjs-dev.firebaseapp.com/api/operators/filter).

## Objectif

A Venir

## Enoncé

A Venir

---

VirtuoWorks® - tous droits réservés©