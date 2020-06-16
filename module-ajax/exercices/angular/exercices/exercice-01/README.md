# Le service `HttpClient` de *Angular*

---

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

Pour cet exercice vous utiliserez `Angular`.
- Vous penserez à créer un page d'accueil ainsi qu'un menu de navigation pour
accéder à la vue de formulaire;

- Pour les requêtes AJAX, vous utiliserez le service `HttpClient` qui
  permet de gérer les requêtes `ajax` au sein de *Angular*.

## Enoncé

* Dans le template du composant de formulaire :

  *  Créez un formulaire de création d'adresse avec tous les champs nécessaires.
  *  Créez un formulaire de création de personnes avec tous les champs
     nécessaires.
  *  La liste de sélection d'adresses sera créé à l'aide de la directive `*ngFor`.

* Dans le composant de formulaire :

  * Importez le service `HttpClient`.

  * A l'initialisation du composant :
    * Effectuez une requête AJAX à destination de votre serveur à l'aide du service
      `HttpClient` pour récupérer la liste des adresses en base de données.
    * Utilisez cette liste pour créer une liste sélection d'adresses qui, pour
      chaque adresse, créé une balise `option` ayant pour valeur l'identifiant
      de l'adresse et pour contenu le texte de l'adresse.
    * Positionnez cette liste de sélection sous un élément `form` correspondant
      au *formulaire de création de personnes*
  * A la soumission du formulaire de *formulaire de création d'adresses* (évènement `(submit)`) :
    * Utilisez le service `HttpClient` pour envoyer la nouvelle adresse à
      votre serveur;
    * Mettez à jour la propriété du composant que vous utilisez pour stocker
      vos adresses avec la nouvelle adresse ou recréez la complétement (au
      choix).
  * A la soumission du formulaire *formulaire de création de personnes* (évènement `(submit)`) :
    * Utilisez le service `HttpClient` pour envoyer la nouvelle personne à votre
      serveur;
    * Affichez un message indiquant que la sauvegarde a bien eu lieu sous le
      formulaire de création de personnes (pensez à vérifier que la personne
      est effectivement créée en base de données).

---

VirtuoWorks® - tous droits réservés©