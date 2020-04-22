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
// Submit button <input type="submit" value="Submit">
let submitBtn = window.document.createElement("input");
submitBtn.type = "submit";
submitBtn.value = "Submit";
submitBtn.innerHTML = "Submit";

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
const refreshList = function(){
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
observable.subscribe(function (evt) {

    personForm.appendChild(fNameLabel);
    personForm.appendChild(firstNameInput);
    personForm.appendChild(lNameLabel);
    personForm.appendChild(lastNameInput);
    personForm.appendChild(bDayLabel);
    personForm.appendChild(bDayInput);
    personForm.appendChild(selectAddress);
    personForm.appendChild(submitBtn);

    window.document.body.appendChild(personForm);
    window.document.body.appendChild(addressForm);

    refreshList();

})

const obsCreatePerson = fromEvent(personForm, "submit");
const obsCreateAddress = fromEvent(addressForm, "submit");


obsCreateAddress.subscribe(function (evt) {
    evt.preventDefault();
    console.log(evt.target[3].value);
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
        console.log(data.response);
        refreshList();
    })
});



obsCreatePerson.subscribe(function (evt) {
    evt.preventDefault();
    console.log(`${evt.target[0].value} ::: ${evt.target[1].value} :: ${evt.target[2].value}`);
    console.log(evt.target[3].value);
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
            "addressId": `${evt.target[3].value}`,
        }
    });

    obsPostPerson.subscribe(function (data) {
        console.log(data.response);
    })

})
