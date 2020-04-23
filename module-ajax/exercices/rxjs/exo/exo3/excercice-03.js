import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';


const observable = fromEvent(window, "DOMContentLoaded");

//FORM
let personForm = window.document.createElement("form");
personForm.id = "personForm";
//ALL LABELS 
let fNameLabel = window.document.createElement("label");
fNameLabel.htmlFor = "firstNameInput";
fNameLabel.innerHTML = "First Name : ";
let lNameLabel = window.document.createElement("label");
lNameLabel.htmlFor = "lastNameInput";
lNameLabel.innerHTML = "Last Name : ";
let bDayLabel = window.document.createElement("label");
bDayLabel.htmlFor = "bDayInput";
bDayLabel.innerHTML = "BirthDate: ";
let cityNameLabel = window.document.createElement("label");
cityNameLabel.htmlFor = "cityNameInput";
cityNameLabel.innerHTML = "Browse Address by City : ";
let chosenAddressLabel = window.document.createElement("label");
chosenAddressLabel.htmlFor = "chosenCityInput";
chosenAddressLabel.innerHTML = "Chosen Address by City : ";

let selectAddress = window.document.createElement("select");

//ALL INPUT NO SELECT LIST 
let firstNameInput = window.document.createElement("input");
firstNameInput.type = "text";
firstNameInput.id = "firstNameInput";
let lastNameInput = window.document.createElement("input");
lastNameInput.type = "text";
lastNameInput.id = "lastNameInput";
let bDayInput = window.document.createElement("input");
bDayInput.id = "bDayInput";
bDayInput.type = "date";
let cityNameInput = window.document.createElement("input");
cityNameInput.type = "text";
cityNameInput.id = "cityNameInput";
let chosenCityInput = window.document.createElement("input");
chosenCityInput.type = "number";
chosenCityInput.id = "cityNameInput";
chosenCityInput.hidden = true;


// Submit button <input type="submit" value="Submit">
let submitBtn = window.document.createElement("input");
submitBtn.type = "submit";
submitBtn.value = "Submit";
submitBtn.innerHTML = "Submit";

//Link element to create address

let linkCreateAddress = window.document.createElement("a");
linkCreateAddress.innerHTML = "Create a new address !";
linkCreateAddress.style.color = "cornflowerblue";
linkCreateAddress.style.textDecoration = "underline";
linkCreateAddress.hidden = true; 

let addressForm = window.document.createElement("form");
addressForm.id = "createAddress";
addressForm.innerHTML = `
<label>Stret Name : </label>
<input type="text"/>
<label>City Name :</label>
<input type="text"/>
<label> Zip Code : </label>
<input  type="text"/>
<label> Country Name : </label>
<input type="text"/>
<input type="submit" value="Submit">`;

let divListCity = window.document.createElement("div");

let chosenAddressHtml = window.document.createElement("p");
//<button>&#x274C</button>
let chosenAddressDelBtn = window.document.createElement("button");
chosenAddressDelBtn.innerHTML = "&#x274C";
chosenAddressDelBtn.id = "delBtnId"

//Message For No MAtches in Db 
/*    font-weight: bolder;
    color: red;
*/
let msgNoMatch = window.document.createElement("p");
msgNoMatch.innerHTML = "Browse again or create a new address";
msgNoMatch.style.fontWeight = "bolder";
msgNoMatch.style.color = "red";
msgNoMatch.hidden = true; 


const createOpt = function (params) {
    selectAddress.innerHTML = "";
    for (let index = 0; index < params.length; index++) {
        let addressValue = params[index].idFromDb;
        let streetValue = params[index].street;
        let cityValue = params[index].city;
        let optText = `Street : ${streetValue}, City : ${cityValue}`;
        let option = window.document.createElement("option");
        option.value = addressValue;
        option.innerHTML = optText;
        selectAddress.appendChild(option);
    }
}
let listItemMatch = window.document.createElement("ul");
divListCity.appendChild(listItemMatch);

const createList = function (params) {
    listItemMatch.innerHTML = "";

    for (let index = 0; index < params.length; index++) {
        let addressValue = params[index].idFromDb;
        let streetValue = params[index].street;
        let cityValue = params[index].city;
        let listText = ` City : ${cityValue} , Street : ${streetValue} <br> `;
        let listItem = window.document.createElement("li");
        fromEvent(listItem, "click").subscribe(function (evt) {
            afficheChosenAddress(evt, params[index]);
        });
        listItem.innerHTML = listText;
        listItemMatch.appendChild(listItem);
    }
    divListCity.appendChild(listItemMatch);
    document.getElementById("personForm").appendChild(divListCity);
    document.getElementById("personForm").appendChild(linkCreateAddress);
}

const refreshList = function () {
    const obsSelectList = ajax({
        url: "http://localhost:8082/addresses",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    obsSelectList.subscribe(function (data) {
        createOpt(data.response);
    })
};

const afficheChosenAddress = function (evt, address) {
    evt.preventDefault();
    let streetChosen = address.street;
    let cityChosen = address.city;
    let zipCodeChosen = address.zipCode;
    let countryChosen = address.country;
    chosenCityInput.value = address.idFromDb;
    chosenAddressHtml.innerHTML = `Address chosen : ${streetChosen} in  ${cityChosen} (${zipCodeChosen}), Country : ${countryChosen}  `;
    chosenAddressHtml.insertAdjacentElement("beforeend", chosenAddressDelBtn);
    personForm.appendChild(chosenAddressHtml);
}

observable.subscribe(function (evt) {

    personForm.appendChild(fNameLabel);
    personForm.appendChild(firstNameInput);
    personForm.appendChild(lNameLabel);
    personForm.appendChild(lastNameInput);
    personForm.appendChild(bDayLabel);
    personForm.appendChild(bDayInput);
    //Search Input on City
    personForm.appendChild(cityNameLabel);
    personForm.appendChild(cityNameInput);
    //Chosen address by city
    //personForm.appendChild(chosenAddressLabel);
    personForm.appendChild(chosenCityInput);

    //personForm.appendChild(selectAddress);
    // personForm.appendChild(linkCreateAddress);
    personForm.appendChild(submitBtn);
    personForm.appendChild(linkCreateAddress);
    personForm.appendChild(msgNoMatch);
    window.document.body.appendChild(personForm);
    // window.document.body.appendChild(addressForm);

    refreshList();

})

// From Event OBS 
const obsCreatePerson = fromEvent(personForm, "submit");
const obsCreateAddress = fromEvent(addressForm, "submit");
const obsCityName = fromEvent(cityNameInput, "keyup");

const obsDeleteCityChosenFromForm = fromEvent(chosenAddressDelBtn, "click");


obsDeleteCityChosenFromForm.subscribe(function (evt) {
    evt.preventDefault();
    console.log(evt.target);
    //Reset lists
    chosenAddressHtml.innerHTML = "";
    //reset create Person form
    chosenCityInput.innerHTML = "";
    chosenCityInput.value = "";
});

obsCityName.subscribe(function (evt) {
    evt.preventDefault();
    let city = evt.target.value;
    if (city != "") {
        const searchByCityName = ajax({
            url: `http://localhost:8082/addresses/searchByCityName/${city}`,
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        searchByCityName.subscribe(function (data) {
            if (data.response.length == 0) {
                console.log("No matches found ");
                msgNoMatch.hidden = false;
                linkCreateAddress.hidden = false;
                divListCity.innerHTML = "";
            } else {
                msgNoMatch.hidden = true;
                linkCreateAddress.hidden = false;
                createList(data.response);
            }
        });
    } else {
        linkCreateAddress.hidden = false;
        divListCity.innerHTML = "";
    }
});


obsCreateAddress.subscribe(function (evt) {
    evt.preventDefault();
    const obsPostAddress = ajax({
        url: "http://localhost:8082/addresses",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: {
            "street": `${evt.target[0].value}`,
            "city": `${evt.target[1].value}`,
            "zipCode": `${evt.target[2].value}`,
            "country": `${evt.target[3].value}`,
        }
    });

    obsPostAddress.subscribe(function (data) {
        refreshList();
    })
});



obsCreatePerson.subscribe(function (evt) {
    evt.preventDefault();
    const obsPostPerson = ajax({
        url: "http://localhost:8082/persons",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
        },
        body: {
            "firstName": `${evt.target[0].value}`,
            "lastName": `${evt.target[1].value}`,
            "birthdate": `${evt.target[2].value}`,
            "addressId": `${evt.target[4].value}`,
        }
    });

    obsPostPerson.subscribe(function (data) {
        console.log(data.response);
    })

})
