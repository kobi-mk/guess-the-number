import React from "react";

function Result ({secretNum, term}){
    let res;

    if(term){
        if(term > secretNum && 11 > term){
            res = 'Higher';
        }
        else if(term < secretNum && 1 <= term){
            res = 'Lower';
        }
        else if(term == secretNum){
            res = 'You got it,Gowmy kutty'
        }
        else{
            res = 'Enter valid input'
        }
    }

    return <h3>You Guessed: {res}</h3>
}
export default Result;