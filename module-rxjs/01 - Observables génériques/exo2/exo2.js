import { Observable, fromEvent, Subject, from, ReplaySubject, BehaviorSubject } from 'rxjs';



const obsDomInit = fromEvent(window, "DOMContentLoaded");

let divResult = window.document.createElement("div");
let arrUP = "&#x2191";
let arrL = "&#x2190";
let arrD = "&#x2193;";
let arrR = "&#x2192";


obsDomInit.subscribe(function () {
    window.document.body.appendChild(divResult);
});

const foundButton = new Subject();
foundButton.subscribe({
    next: function (keyCodePress) {
    if (keyCodePress == 38) {
        divResult.innerHTML = `<p> You hit the : ${arrUP} button </p>`;
    } else if (keyCodePress == 39) {
        divResult.innerHTML = `<p> You hit the : ${arrR} button </p>`;
    } else if (keyCodePress == 40) {
        divResult.innerHTML = `<p> You hit the : ${arrD} button </p>`;
    } else if (keyCodePress == 37) {
        divResult.innerHTML = `<p> You hit the : ${arrL} button </p>`;
    }
},
complete: function(){
    console.log("FINI");
    divResult.innerHTML = `<h3>FINI</h3>`;
} });

const subR = new ReplaySubject();

const subB = new BehaviorSubject(0);

window.addEventListener('keydown', function (keyboarEvent){
    if (keyboarEvent.keyCode != 13) {
        foundButton.next(keyboarEvent.keyCode);
        subR.next(keyboarEvent.keyCode);
        subB.next(keyboarEvent.keyCode);
    } else {
        foundButton.complete();
    }
});
let suiteDeTouche = "";
const afficheDernier = function(val){
    divResult.innerHTML = "";
    suiteDeTouche +=  "Last Key pressed :"+ val;
    divResult.innerHTML = suiteDeTouche;
};
const afficherResultat = function(val){
    divResult.innerHTML =  "";
    if (val == 38) {
        suiteDeTouche +=  arrUP; 
    } else if (val == 39) {
        suiteDeTouche +=  arrR; 
    } else if (val == 40) {
        suiteDeTouche +=  arrD; 
    } else if (val == 37) {
        suiteDeTouche +=  arrL; 
    }
    divResult.innerHTML = suiteDeTouche;
};
window.addEventListener('click', function (mouseEvent){
    subR.subscribe({
        next:afficherResultat,
    });
    subB.subscribe({
        next:afficheDernier,
    });
});