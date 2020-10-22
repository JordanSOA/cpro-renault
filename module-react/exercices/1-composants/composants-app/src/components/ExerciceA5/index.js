import React from 'react';

function ExerciceA5() {
    const roundDiv = ["red", "green", "blue", "yellow"];

    const bool = false;

    const displayOnlyRed = function(color){
        return (color === "red") ? !bool : bool;
    };
    const removeOnlyGreen = function(color){
        return (color === "green") ? bool : !bool;
    };
    const displayOnlySelectedColor = function(color, colorToFound){
        return (color === colorToFound) ? !bool : bool;
    };
    const tab = roundDiv.map((color, index) => {
        // if (displayOnlyRed(color)){
        //     return <div key={color} style={{
        //     backgroundColor: color,
        //     height: "5em",
        //     width: "5em",
        //     borderRadius: "50%"
        // }}>
        // </div> 
        // }
        // if (removeOnlyGreen(color)){
        //     return <div key={color} style={{
        //     backgroundColor: color,
        //     height: "5em",
        //     width: "5em",
        //     borderRadius: "50%"
        // }}>
        // </div> 
        // }

        if (displayOnlySelectedColor(color, "blue")){
            return <div key={color} style={{
            backgroundColor: color,
            height: "5em",
            width: "5em",
            borderRadius: "50%"
        }}>
        </div> 
        }
        
    })

    return (
        <React.Fragment>
            <h1>ExerciceA5</h1>
            {tab}
        </React.Fragment>
    )
}

export default ExerciceA5;