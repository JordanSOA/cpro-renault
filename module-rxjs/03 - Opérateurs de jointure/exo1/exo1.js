import { fromEvent } from 'rxjs';


let divHtml = window.document.createElement("div");
divHtml.id = "divSpan";
//divHtml.style.display = "flex";
divHtml.style.justifyContent = "space-evenly";
divHtml.hidden = true;

let spanDOHtml = window.document.createElement("span");
spanDOHtml.innerHTML = "DO";
let spanREHtml = window.document.createElement("span");
spanREHtml.innerHTML = "RE";
let spanMIHtml = window.document.createElement("span");
spanMIHtml.innerHTML = "MI";
let spanFAHtml = window.document.createElement("span");
spanFAHtml.innerHTML = "FA";
let spanSOLHtml = window.document.createElement("span");
spanSOLHtml.innerHTML = "SOL";
let spanLAHtml = window.document.createElement("span");
spanLAHtml.innerHTML = "LA";
let spanSIHtml = window.document.createElement("span");
spanSIHtml.innerHTML = "SI";
divHtml.appendChild(spanDOHtml);
divHtml.appendChild(spanREHtml);
divHtml.appendChild(spanMIHtml);
divHtml.appendChild(spanFAHtml);
divHtml.appendChild(spanSOLHtml)
divHtml.appendChild(spanLAHtml);
divHtml.appendChild(spanSIHtml);

let balAudio = window.document.createElement("audio");
balAudio.setAttribute("muted", true);

let balSource = window.document.createElement("source");
balSource.type = "audio/wav";
balAudio.appendChild(balSource);

const domInit = fromEvent(window, "DOMContentLoaded");

const afficheDiv = function () {
    // if (divHtml.style.display == "none") {
    //     divHtml.style.display = "contents";
    // } else if (divHtml.style.display == "contents") {
    //     divHtml.style.display == "none";
    // }

    if (divHtml.hidden == true) {
        divHtml.style.display = "flex";
        divHtml.hidden = false;

    } else {
        divHtml.style.display = "none";
        divHtml.hidden = true;
    }
};

const createBal = function (val) {
    //balAudio.currentSrc.replace("/re-stretched.wav","");
    if (val.target.innerHTML == "DO") {
        balAudio.currentSrc.replace("/re-stretched.wav","/do-stretched.wav");
        // balAudio.src = "http://raw.githubusercontent.com/VirtuoWorks/cpro-renault/master/module-rxjs/03%20-%20Op%C3%A9rateurs%20de%20jointure/exercice-01/sounds/do-stretched.wav";
        // balSource.src = "http://raw.githubusercontent.com/VirtuoWorks/cpro-renault/master/module-rxjs/03%20-%20Op%C3%A9rateurs%20de%20jointure/exercice-01/sounds/do-stretched.wav";
        balAudio.play();
    } else if (val.target.innerHTML == "RE") {
        balSource.src = "http://raw.githubusercontent.com/VirtuoWorks/cpro-renault/master/module-rxjs/03%20-%20Op%C3%A9rateurs%20de%20jointure/exercice-01/sounds/re-stretched.wav";
        balAudio.play();
        console.log("Re note");
    } else if (val.target.innerHTML == "MI") {
        balSource.src = "http://raw.githubusercontent.com/VirtuoWorks/cpro-renault/master/module-rxjs/03%20-%20Op%C3%A9rateurs%20de%20jointure/exercice-01/sounds/mi-stretched.wav";
        balAudio.play();
        console.log("Mi note");
    } else if (val.target.innerHTML == "FA") {
        balSource.src = "http://raw.githubusercontent.com/VirtuoWorks/cpro-renault/master/module-rxjs/03%20-%20Op%C3%A9rateurs%20de%20jointure/exercice-01/sounds/fa-stretched.wav";
        balAudio.play();
        console.log("Fa note");
    } else if (val.target.innerHTML == "SOL") {
        balSource.src = "http://raw.githubusercontent.com/VirtuoWorks/cpro-renault/master/module-rxjs/03%20-%20Op%C3%A9rateurs%20de%20jointure/exercice-01/sounds/sol-stretched.wav";
        balAudio.play();
        console.log("Sol note");
    } else if (val.target.innerHTML == "LA") {
        balSource.src = "http://raw.githubusercontent.com/VirtuoWorks/cpro-renault/master/module-rxjs/03%20-%20Op%C3%A9rateurs%20de%20jointure/exercice-01/sounds/la-stretched.wav";
        balAudio.play();
        console.log("La note");
    } else if (val.target.innerHTML == "SI") {
        balSource.src = "http://raw.githubusercontent.com/VirtuoWorks/cpro-renault/master/module-rxjs/03%20-%20Op%C3%A9rateurs%20de%20jointure/exercice-01/sounds/si-stretched.wav";
        balAudio.play();
        console.log("Si note");
    }
    divHtml.appendChild(balAudio);
};

domInit.subscribe(function (evt) {
    evt.preventDefault();

    let tag = window.document.getElementById("tagClick");
    window.document.body.appendChild(divHtml);

    const clickPtag = fromEvent(tag, "click");
    clickPtag.subscribe({
        next: afficheDiv
    });
    getSpan();
});

const getSpan = function () {
    let allSpan = document.getElementsByTagName("span");
    for (let i = 0; i < allSpan.length; i++) {
        const element = allSpan[i];
        const mouseMvt = fromEvent(element, "mouseover");
        mouseMvt.subscribe({
            next: createBal
        });
    }
};

const endPplay = fromEvent(balAudio, "ended");

endPplay.subscribe({
    next: function () {
        console.log("Ended");
    }
});

