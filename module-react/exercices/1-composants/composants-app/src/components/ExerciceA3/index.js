import React from 'react'

function ExerciceA3() {

    const returnHello = function () {
        return "Bonjour !";
    }

    const divideThisByThat = function (num1, num2) {
        return num1 / num2;
    }
    const superSentence = function(arraySentence){
        return arraySentence.join(" ");
    }
    return (
        <div className="ExerciceA3">
            <p> {returnHello()}</p>
            <p> {divideThisByThat(10, 5)}</p>
    <p>  {superSentence(["voila ma","super","phrase"])}</p>
        </div>
    );
}

export default ExerciceA3;