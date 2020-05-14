# L'Opérateur utilitaire `toArray`

---

## Présentation

Vous allez travailler avec l'*Opérateur de transformation* `toArray` qui attend qu'un *Observable* ait terminé d'émettre toutes ses valeurs avant d'émettre l'ensemble des valeurs émises sous la forme d'un tableau.

`toArray` fait partie de la catégorie des __*Pipeable Operators*__, qui permettent de
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
    ObservableA (observable initial) :

    ------1-----------2------------------3--------------|---------------> temps

    ObservableA.pipe(toArray())
                                                        |
    ------------------------------------------------[1, 2, 3]-----------> temps
                                                        |
    ```


Ci-après la [Documentation pour l'opérateur `toArray`](https://rxjs-dev.firebaseapp.com/api/operators/toArray).

## Objectif

A Venir

## Enoncé

A Venir

---

VirtuoWorks® - tous droits réservés©