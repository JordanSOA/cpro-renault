import { Observable, fromEvent, Subject, from } from 'rxjs';



const obsDomInit = fromEvent(window, "DOMContentLoaded");

let divResult = window.document.createElement("div");
let arrUP = "&#x2191";
let arrL = "&#x2190";
let arrD = "&#x2193;";
let arrR = "&#x2192";


obsDomInit.subscribe(function () {

    window.document.body.appendChild(divResult);
    console.log("ok");



})

//PART 1
let keyPressCode = Observable.create(function (abonne) {
    window.addEventListener('keydown', function (keyboarEvent) {
        abonne.next(keyboarEvent.keyCode);
    })
})

keyPressCode.subscribe(function (keyCodePress) {
    if (keyCodePress == 38) {
        divResult.innerHTML = `<p> You hit the : ${arrUP} button </p>`;
    } else if (keyCodePress == 39) {
        divResult.innerHTML = `<p> You hit the : ${arrR} button </p>`;
    } else if (keyCodePress == 40) {
        divResult.innerHTML = `<p> You hit the : ${arrD} button </p>`;
    } else if (keyCodePress == 37) {
        divResult.innerHTML = `<p> You hit the : ${arrL} button </p>`;
    } else if (keyCodePress == 13) {
        divResult.innerHTML = `<p> <bold>Stop</bold> </p>`;
    }
})

//PART 2

const foundButton = new Subject();

foundButton.subscribe(function (keyCodePress) {
        if (keyCodePress == 38) {
            divResult.innerHTML = `<p> You hit the : ${arrUP} button </p>`;
        } else if (keyCodePress == 39) {
            divResult.innerHTML = `<p> You hit the : ${arrR} button </p>`;
        } else if (keyCodePress == 40) {
            divResult.innerHTML = `<p> You hit the : ${arrD} button </p>`;
        } else if (keyCodePress == 37) {
            divResult.innerHTML = `<p> You hit the : ${arrL} button </p>`;
        } else if (keyCodePress == 13) {
            divResult.innerHTML = `<p> <bold>Stop</bold> </p>`;
        };
    });

window.addEventListener('keydown', function (keyboarEvent){
    foundButton.next(keyboarEvent.keyCode);
});