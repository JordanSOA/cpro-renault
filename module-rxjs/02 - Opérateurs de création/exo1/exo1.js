import { from, fromEvent } from 'rxjs';

window.addEventListener("DOMContentLoaded", function () {
    let allDiv = from(document.getElementsByTagName("div"));
    console.log("INIT");

    allDiv.subscribe((val) => {

        val.addEventListener("mousedown", function (evt) {

            evt.preventDefault();
            val.style.position = "absolute";
            let allItems = from(val.getElementsByTagName("li"));
            allItems.subscribe((val) => {
                val.style.color = "red";
            })
        });

        val.addEventListener("mouseup", function (evt) {
            evt.preventDefault();
            val.style.position = "fixed";
            let allItems = from(val.getElementsByTagName("li"));
            allItems.subscribe((val) => {
                val.style.color = "black";
            });
        });

        // DONT WORK
        val.addEventListener("mousemove", function (evt) {
            evt.preventDefault();
            if (val.style.position == "absolute") {
                val.getBoundingClientRect().top = evt.clientY;
            };
        });
    });

});


// const obs2 = fromEvent(window, "click");

// obs2.subscribe((evtSouris) => {
//   evtSouris.target; // window
// });