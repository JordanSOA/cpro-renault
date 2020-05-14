# L'Opérateur utilitaire `reduce`

---

## Présentation

Vous allez travailler avec l'*Opérateur de transformation* `reduce` qui permet d'appliquer une fonction d'accumulation (à l'instar de la fonction Array.prototype.reduce) à chacune des valeurs émises par un *Observable* et d'émettre seulement la valeur finale de l'accumulation lorsque l'*Observable* se termine.

`reduce` fait partie de la catégorie des __*Pipeable Operators*__, qui permettent de
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

L'`operateur1` s'applique à l'`observableInitial` et renvoie un nouvel *Observable* qui est alors passé au à l'`operateur2`, qui lui-même passe un nouvel *Observable* à l'`operateur3`, et ainsi de suite. L'*Observable* renvoyé par le dernier opérateur devient l'`observableFinal`.

Ci-après la [Documentation pour l'opérateur `reduce`](https://rxjs-dev.firebaseapp.com/api/operators/reduce).

## Objectif

## Enoncé
---

VirtuoWorks® - tous droits réservés©