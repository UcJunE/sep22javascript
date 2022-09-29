const prompt  = require("prompt-sync")();

function forWeight(){
    const weight = parseFloat(prompt("Please enter your weight: ")); 
    return weight;
}




function forHeight(){
    const height = parseFloat(prompt("Please enter your height: "));
    return height;
}

function calculateBmi(weight,height){
    return  weight/height**2;
    
}

function displayBMI(bmi){
    console.log(bmi);
}

const weight = forWeight();
const height =forHeight();
const calcBmi = calculateBmi(weight,height);




console.log("Your Bmi is", calcBmi);