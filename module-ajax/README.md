# Formation : Module AJAX

__Février 2020, Mars 2020__

---

## [Cours](./cours)

* [Exemples de Promesses](./cours/20200227_cours_promesses.js)
* [Exemples de Promesses et `async`/`await`](./cours/20200228_cours_promesses.js)

---

## [Exercices avec XmlHttpRequest et Fetch](./exercices/natif/exercices)

### Exemples :

* [Clients XHR et `Fetch`](./exercices/natif/exemples/clients)
* [Serveur basé sur Node](./exercices/natif/exemples/serveur-natif)
  * *Sans base de données*.
* [Serveur basé sur `Express`/`PgSQL`](./exercices/natif/exemples/serveur-express)
  * *Vous avez besoin d'une base de données pour le faire fonctionner*. Le code
  `sql` de [création de la base de données est disponible ici](./exercices/natif/exemples/serveur-express/database).

### Enoncés :

__Objectif : Comprendre la méthode AJAX__

- [Exercice 1 (XHR): `GET` et `POST`](./exercices/natif/exercices/exercice-1.md)
  * Nécessite le serveur basé sur `Spring` codé en `Java` avec votre formateur `Java`
  * Nécessite l'API JavaScript [`XmlHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XmlHttpRequest)
  * Nécessite une API REST avec opérations CRUD sur une entité *Adresses*. On s'intéresse ici particulièrement aux opérations Create et Read.
- [Exercice 2 (`Fetch`): `GET` et `POST`](./exercices/natif/exercices/exercice-2.md)
    * Reprend l'énoncé de l'Exercice 1.
    * Nécessite l'API JavaScript [`Fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
    * Nécessite une API REST avec opérations CRUD sur une entité *Adresses*. On s'intéresse ici particulièrement aux opérations Create et Read
- [Exercice 3 (XHR): Listes dépendantes](./exercices/natif/exercices/exercice-3.md)
    * Peut être réalisé en se basant sur l'exemple de [Serveur basé sur `Express`/`PgSQL`](./exercices/natif/exemples/serveur-express)
    * Nécessite l'API JavaScript [`XmlHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XmlHttpRequest)
    * Nécessite une API REST avec opérations CRUD sur des entités *Pays*, *Régions* et *Villes*. On s'intéresse ici particulièrement aux opérations Read.
- [Exercice 4 (`Fetch`): Listes dépendantes](./exercices/natif/exercices/exercice-4.md)
    * Reprend l'énoncé de l'Exercice 3.
    * Nécessite l'API JavaScript [`Fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
    * Nécessite une API REST avec opérations CRUD sur des entités *Pays*, *Régions* et *Villes*. On s'intéresse ici particulièrement aux opérations Read. On s'intéresse ici particulièrement aux opérations Create.
- [Exercice 5 (XHR): Formulaires dépendants](./exercices/natif/exercices/exercice-5.md)
    * Peut être réalisé en se basant sur l'exemple de [Serveur basé sur `Express`/`PgSQL`](./exercices/natif/exemples/serveur-express)
    * Nécessite l'API JavaScript [`XmlHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XmlHttpRequest)
    * Nécessite une API REST avec opérations CRUD sur des entités *Pays*, *Régions* et *Villes*. On s'intéresse ici particulièrement aux opérations Create.
- [Exercice 6 (`Fetch`): Formulaires dépendants](./exercices/natif/exercices/exercice-6.md)
    * Reprend l'énoncé de l'Exercice 5.
    * Nécessite l'API JavaScript [`Fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
    * Nécessite une API REST avec opérations CRUD sur des entités Pays, *Régions et Villes*. On s'intéresse ici particulièrement aux opérations Create.
- [Exercice 7 (XHR): Cascades de suppression](./exercices/natif/exercices/exercice-7.md)
    * Nécessite l'API JavaScript [`XmlHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XmlHttpRequest)
    * Nécessite une API REST avec opérations CRUD sur des entités *Pays*, *Régions* et *Villes*. On s'intéresse ici particulièrement aux opérations Delete.
- [Exercice 8 (`Fetch`): Cascades de suppression](./exercices/natif/exercices/exercice-8.md)
    * Reprend l'énoncé de l'Exercice 7.
    * Nécessite l'API JavaScript [`Fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
    * Nécessite une API REST avec opérations CRUD sur des entités *Pays*, *Régions* et *Villes*. On s'intéresse ici particulièrement aux opérations Delete.

*A utiliser avec une API REST développée par ailleurs.*

---

## Exercices avec RxJS

### Exemples :

* [Clients basés sur `RxJS`](./exercices/rxjs/exemples/clients)
* [Serveur basé sur `Express`/`PgSQL`](./exercices/rxjs/exemples/serveur-express)
  * *Vous avez besoin d'une base de données pour le faire fonctionner*. Le code
  `sql` de [création de la base de données est disponible ici](./exercices/rxjs/exemples/serveur-express/database).

### Présentation :

`RxJS` contient plusieurs __fonctions__ qui permettent d'effectuer des opérations sur
les *Observables*. Appelle ces fonctions __Opérateurs__ (*Operators*).

Il existe 2 types principaux d'opérateurs :
- Les __Opérateurs de Création__ (*Creation Operators*) qui permettent de créer
  un *Observable* à partir d'une structures de données qui n'est pas un
  *Observable* (Objet, Tableau, Evènement, ...) ou de créer un *Observable* à
  partir de plusieurs *Observable* (jointures).

- Les __*Pipeable Operators*__ qui permettent de
  créer un *Observable* à partir d'un autre *Observable* mais qui transforment
  les valeurs émises par rapport à celles émises par l'*Observable* initial.

Pour savoir comment utiliser ces fonctions vous pouvez vous référer à :

* La [documentation concernant les __Opérateurs__ de `RxJS`](https://rxjs-dev.firebaseapp.com/guide/operators)
* L'[API concernant les __Opérateurs__](https://rxjs-dev.firebaseapp.com/api?type=function) filtrée pour n'afficher que les __function__.

Les exercices suivants visent à expérimenter l'__Opérateur de Création__ `ajax`.
L'opérateur de création `ajax` est un fonction qui permet d'implémenter la
méthode `ajax` selon le *Design Pattern Observable*. La fonction `ajax` :
- prend en argument un objet contenant l'ensemble des informations nécessaire à
  la création de la requête HTTP asynchrone;
- retourne un *Observable* auquel peut souscrire un *Observer* pour traiter la
  réponse HTTP du serveur (méthode `.subscribe()` des *Observables*).

Ci-après la :
- [Documentation pour l'opérateur `ajax`](https://rxjs-dev.firebaseapp.com/api/ajax/ajax).
- Vous pouvez vous référer aux [exemples](./exercices/rxjs/exemples) pour essayer
  une implémentation client/serveur de cet opérateur.

### Enoncés :

__Objectif : Combiner les *Observables* avec la méthode AJAX__

- (__NEW__ !) [Exercice 1 (avec `RxJS`): `GET` et `POST`](./exercices/rxjs/exercices/exercice-01) : Créer une *personne* à partir d'une adresse *existante* dans une liste de séléction.
  * Nécessite le serveur basé sur `Spring` codé en `Java` avec votre formateur `Java`
    ou l'exemple de [serveur basé sur Express/PgSQL](./exercices/rxjs/exemples/serveur-express)
    fourni.
  * Nécessite l'API RxJS [`ajax`](https://rxjs-dev.firebaseapp.com/api/ajax/ajax)
  * Nécessite une API REST avec opérations CRUD sur une entité *Personnes* et une entité *Adresses*.
    On s'intéresse ici particulièrement aux opérations Create et Read.

- (__NEW__ !) [Exercice 2 (avec `RxJS`): `GET` et `POST`](./exercices/rxjs/exercices/exercice-02) : Créer une *personne* à partir d'une adresse *existante* récupérée à l'aide d'un champ d'"*autocompletion*".
  * Nécessite le serveur basé sur `Spring` codé en `Java` avec votre formateur `Java`.
  * Nécessite l'API RxJS [`ajax`](https://rxjs-dev.firebaseapp.com/api/ajax/ajax)
  * Nécessite une API REST avec opérations CRUD sur une entité *Personnes* et une entité *Adresses*.
    On s'intéresse ici particulièrement aux opérations Create et Read.

- (__NEW__ !) [Exercice 3 (avec `RxJS`): `GET` et `POST`](./exercices/rxjs/exercices/exercice-03) : Créer une *personne* à partir d'une adresse *existante* récupérée à l'aide d'un champ d'"*autocompletion*" __ou__ création d'une nouvelle adresse.
  * Nécessite le serveur basé sur `Spring` codé en `Java` avec votre formateur `Java`.
  * Nécessite l'API RxJS [`ajax`](https://rxjs-dev.firebaseapp.com/api/ajax/ajax)
  * Nécessite une API REST avec opérations CRUD sur une entité *Personnes* et une entité *Adresses*.
    On s'intéresse ici particulièrement aux opérations Create et Read.

---

VirtuoWorks® - tous droits réservés©