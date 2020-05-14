# L'Opérateur de transformation `pluck`

---

## Présentation

Vous allez travailler avec l'*Opérateur de transformation* `pluck` qui permet d'extraire une propriété d'une valeur émise (lorsque cette valeur est un objet) par un *Observable* et d'émettre la valeur de cette propriété sous forme d'*Observable*.

`pluck` fait partie de la catégorie des __*Pipeable Operators*__, qui permettent de
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

    ---{ note: "Do" }-----{ note: "Ré" }-----{ note: "Mi" }-------------> temps

    observableA.pipe(pluck("note"))

    --------"Do"---------------"Ré"---------------"Mi"------------------> temps
    ```

Ci-après la [Documentation pour l'opérateur `pluck`](https://rxjs-dev.firebaseapp.com/api/operators/pluck).

## Objectif

A Venir

## Enoncé

A Venir

---

VirtuoWorks® - tous droits réservés©