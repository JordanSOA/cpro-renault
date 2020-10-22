import React from 'react'

function ExerciceA4() {

    const classInfo = {
        name: "Renault",
        speciality: "FullstackJS",
        enrolled: [{
            firstname: "Toto",
            lastname: "Musk",
            age: 42
        },{
            firstname: "Alice",
            lastname: "Gates",
            age: 23 
        },{
            firstname: "Bob",
            lastname: "Sponge",
            age: 24
        }]
    };

    const getEnrolledCount = () => {
        return classInfo.enrolled.length;
    };
    const tableau = classInfo.enrolled.map((pourUnObjetDeLaListe, indiceDeObjet) => {
        return <li 
        key={pourUnObjetDeLaListe.lastname}>
            {pourUnObjetDeLaListe.firstname}
            {pourUnObjetDeLaListe.lastname},
            age : {pourUnObjetDeLaListe.age}</li>
    });
    getEnrolledCount();
    return (
        <React.Fragment>
            <h1>Excercice 04</h1>
            <ul>
                {tableau}
            </ul>
            <p>Enrolled Students Count : { getEnrolledCount()}</p>

        </React.Fragment>
    )

}
export default ExerciceA4;