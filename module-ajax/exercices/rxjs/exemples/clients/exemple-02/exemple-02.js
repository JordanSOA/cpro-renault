import {fromEvent} from 'rxjs';
import {ajax} from 'rxjs/ajax';

// http://localhost:8080/exemple-02.html

/**
const observable = fromEvent(window, "DOMContentLoaded");

observable.subscribe(function(evenement){
  // Mon abonné/OBSERVER/subscriber
  // Ce code sera déclenché au chargement du doument
});
*/
/**
window.addEventListener("DOMContentLoaded", function(evenement){

});
 */

fromEvent(window, "DOMContentLoaded").subscribe(function(evenement){
  // Mon abonné/OBSERVER/subscriber
  // Ce code sera déclenché au chargement du document

  const obs = ajax({
    url: "http://localhost:1337/person",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      id: 1,
      firstname: "Sami",
      lastname: "Radi"
    }
  });

  obs.subscribe(function(donnees){
    donnees.request; // contient les données de la requête
    donnees.response; // contient le données de la réponse
    // Je peux utiliser donnees.response pour produire l'affichage approprié.
  })
});