import {fromEvent} from 'rxjs';
import {ajax} from 'rxjs/ajax';

// Création d'un Observable pour gérer l'évènement DOMContentLoaded.
fromEvent(window, "DOMContentLoaded").subscribe((event) => {
  // Déclaration d'un Observer pour l'Observable au dessus.

  // Création d'un Observable pour produire la requête AJAX
  ajax({
    url: "http://localhost:1337/persons", // URL à laquelle envoyer la requête
    method: "GET", // méthode GET, POST, PUT, DELETE, ...
    headers: { // en-têtes de requête HTTP
      "Content-Type": "application/json" // Type mime des données à envoyer
    },
    body: {
      // données à envoyer dans le corps de la requête
    }
  }).subscribe((data) => {
    // Déclaration d'un Observer pour traiter la réponse HTTP provenant du serveur
    /**
     * data contient :
     * - les données de la requête HTTP
     * -  les en-tête et le corps de réponse HTTP
     */
    console.log(data.response); // Propriété contenant le corps de réponse HTTP

    // Création du contenu du document HTML
    // .status est une propriété perso. (créée coté serveur et inserée dans la réponse HTTP)
    if ( data.response.status && "OK" === data.response.status) {
      // .data est une propriété perso. (créée coté serveur et inserée dans la réponse HTTP)
      // .data.persons est une propriété perso. (créée coté serveur et inserée dans la réponse HTTP)
      if ( data.response.data && data.response.data.persons ) {
        // .data.persons est un array
        data.response.data.persons.forEach((person, index) => {
          // création de l'affichage
          const ul = window.document.createElement("ul");
          const li = window.document.createElement("li");
          li.innerHTML = `${person.firstname} ${person.lastname} né le ${new Date(person.birthdate).toString()}`;
          ul.appendChild(li);
          window.document.body.appendChild(ul);
        });
      }
    }
  });
});