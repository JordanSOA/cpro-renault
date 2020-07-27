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

* Illustration du fonctionnement de `pluck` (à l'aide d'un *Marble Diagram*) :

    ```
    observableA (Observable initial) :

    ---{ note: "Do" }-----{ note: "Ré" }-----{ note: "Mi" }-------------> temps

    observableA.pipe(pluck("note"))

    --------"Do"---------------"Ré"---------------"Mi"------------------> temps
    ```

Ci-après la [Documentation pour l'opérateur `pluck`](https://rxjs-dev.firebaseapp.com/api/operators/pluck).

## Objectif

Utiliser `pluck` pour extraire une information d'un objet...

## Enoncé

Soit l'*Observable* suivant :

```
const monObservable = of({
  e: () => {
    alert(this.t);
  },
  r: true,
  t: 'Ceci est un texte dans un objet',
  y: [{
    u: {
      ' ': {
        ar: {
          e: {
            tho: false,
            the: {
              ' best': 'Bravo !'
            },
            thi: true
          }
        },
        ab: 150
      }
    }
  },{
    e: [() => {
        alert('Vous êtes ici !');
    }, true],
    r: false,
    t: function(){
        this.y = {
            e:() => {
                alert('Ou suis je ? Qui suis je ?');
            }
        };
        alert('Desormais ma propriété y contient un objet');
    }
  },{
    nothing: 'here'
  }]
});
```

En utilisant uniquement la méthode `pipe` et l'opérateur `pluck` (en 1 ou plusieurs
fois si vous le souhaitez), faites en sorte qu'en souscrivant à `monObservable`
la valeur reçue par l'*Observer* soit `Bravo !`.

---

VirtuoWorks® - tous droits réservés©