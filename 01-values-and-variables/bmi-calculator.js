// import prompt function from library to use it
const prompt = require("prompt-sync")();

let weight = prompt("Please enter your weight: ");
let height = prompt("Please enter your height: ");

weight = parseFloat(weight);
height = parseFloat(height);

let bmi = weight/height **2;

console.log("Your BMI is",bmi);

if(bmi<18.5){
    console.log("underweight")
}else if(bmi<24.5){
    console.log("healthy Weight")
}else if(bmi<30){
    console.log("Overweight")
}