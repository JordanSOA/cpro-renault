import React from 'react'


function ExerciceA2() {
    const promotions = [2018,2019,2020,2021,2022];
    const classe = {
        name: 'Renault',
        spec: 'FullStack JS/Java',
        enrolled: 16
    }

    return (
        <div className="ExerciceA2">
            <p>My Promo : { promotions[2]}</p>
            <p> Im in the { classe.name } class with { classe.spec } as speciality</p>
            <p> Enrolled students : { classe.enrolled }</p>
        </div>
    );
}

export default ExerciceA2;