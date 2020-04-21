# L'opérateur de création `ajax`

---

## Présentation

* Vous codez dans les fichiers `exercice-01.html` et `exercice-01.js`;
* Pour pouvoir utiliser `RxJS` dans le fichier `.js`, nous utiliserons
  `webpack`. Pour installer `webpack` et le serveur de développement de
  `webpack` vous exécuterez la commande `npm i` (les dépendances listées dans
  le `package.json` seront alors installées);
* Pour démarrer le serveur de développement de `webpack` :
  * `npx webpack-dev-server --mode development`
  * ou `npm start` (le script `start` est paramétré dans le `package.json`)
  * ou vous pouvez écrire le chemin direct vers l'exécutable dans le dossier
    caché `.bin` du sous dossier `node_modules`. Par exemple :
    * `./node_modules/.bin/webpack-dev-server --mode development`
  * ou bien encore vous pouvez demander à `node` d'exécuter le code situé dans
    le dossier d'installation de `webpack`. Par exemple :
    * `node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --mode development`

## Objectif

L'objectif est de créer un __formulaire de création de *personnes*__. Mais pour
pouvoir créer une *personne*, vous devez lui assigner une *identifiant d'adresse*.
Donc, il faut donc au préalable créer des adresses en base de données. Vous
devez donc également créer un __formulaire de création d'*adresses*__.

Au chargement du document, vous afficherez dans le formulaire de création de
*personnes* une __liste de sélection__ contenant la __liste des adresses__ déjà
existantes en base de données.

Et, __à chaque création__ de nouvelle *adresse* via le formulaire de création
d'*adresses*, vous devrez __mettre à jour__ la liste de sélection d'*adresses* pour
pouvoir proposer ce __nouveau choix__ dans le formulaire de création de *personnes*.

Pour cet exercice vous utiliserez `RxJS` :
- Pour la gestion des évènements, vous utiliserez l'*opérateur de création*
  `fromEvent` qui permet de gérer les évènements selon le
  *Design Pattern Observable*;

- Pour les requêtes AJAX, vous utiliserez l'*opérateur de création* `ajax` qui
  permet de gérer les requêtes `ajax` selon le *Design Pattern Observable*.

## Enoncé



---

VirtuoWorks® - tous droits réservés©