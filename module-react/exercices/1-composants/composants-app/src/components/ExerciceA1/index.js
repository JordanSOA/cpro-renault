import React from 'react'


function ExerciceA1() {
    const resp1 = 36344.789 + 5422.995432;
    const resp2 = "Bonjour".concat("le Monde");
    const resp3 = 4321 % 1234;
    const resp4 =  (0.000005 > 0.00005) ? "true" : "false";
    const x = 4;
    const y = 19;

    return (
        <div className="ExerciceA1">
            <div>
                <p>Que donne la somme de 36344.789 et 5422.995432 ?</p>
                <p> { resp1  } </p>
            </div>
            <div>
                <p>Que donne la concaténation de "Bonjour" et "le Monde" ?</p>
                <p> { resp2 } </p>
            </div>
            <div>
                <p>Quel est le reste de la division entière de 4321 par 1234 ?</p>
                <p> { resp3 } </p>
            </div>
            <div>
                <p>Est-il vrai que 0.000005 est strictement supérieur à 0.00005 ?</p>
                <p> { resp4 } </p>
            </div>
            <div>
                <p>Que donne l'équation ((3x + 2) - (43x * (9y + 6))) / (2y - 7) si x vaut 4 et y vaut 19. Vous devez donc créer 2 constantes numériques dans la méthode render du composant.</p>
                <p> {((3*x + 2) - (43*x * (9*y + 6))) / (2*y - 7)}</p>
            </div>
        </div>
    );
}

export default ExerciceA1;