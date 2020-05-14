# L'Opérateur utilitaire `find`

---

## Présentation

Vous allez travailler avec l'*Opérateur de filtrage* `find` qui permet d'attendre qu'un *Observable* émette une valeur remplissant une condition donnée et de n'émettre que cette valeur. Les valeurs suivantes émises par l'*Observable* seront ignorées.

`find` fait partie de la catégorie des __*Pipeable Operators*__, qui permettent de
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

Ci-après la [Documentation pour l'opérateur `find`](https://rxjs-dev.firebaseapp.com/api/operators/find).

## Objectif

A Venir

## Enoncé

A Venir

---

VirtuoWorks® - tous droits réservés©