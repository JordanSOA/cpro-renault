# L'Opérateur de filtrage `distinct`

---

## Présentation

Vous allez travailler avec l'*Opérateur de filtrage* `distinct` qui permet de ne conserver que les valeurs émises par un *Observable* qui n'ont pas encore été émises auparavant.

Dans le cas où les valeurs émises sont de type `Object`, il est possible de passer en paramètre à `distinct` une clé de propriété (chaîne de caractères) pour appliquer le filtrage uniquement sur cette propriété des objets émis.

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

* Illustration du fonctionnement (à l'aide d'un *Marble Diagram*) :

    ```
    observableA (Observable initial) :

    ------0------1------1------2------3------1------4------3------------> temps

    observableA.pipe(distinct())

    ------0------1-------------2------3-------------4-------------------> temps
    ```
* Illustration du fonctionnement avec clé en paramètre (*Marble Diagram*) :

    ```
    observableA (Observable initial) :

    ----{ v: 0 }----{ v: 0 }----{ v: 1 }----{ v: 0 }----{ v: 2 }--------> temps

    observableA.pipe(distinct("v"))

    -------0-----------------------1-----------------------2------------> temps
    ```

Ci-après la [Documentation pour l'opérateur `distinct`](https://rxjs-dev.firebaseapp.com/api/operators/distinct).

## Objectif

## Enoncé

---

VirtuoWorks® - tous droits réservés©