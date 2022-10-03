const prompt = require("prompt-sync")();


// let word = " the quick brown fox jumps over the lazy dog";

// console.log(word.slice(4,8));

// // string inside the word is not change because
// // 1- slice function actually only slicing the element ,
// // 2- string is immutable

// console.log(word);

// let date = prompt("show me DD-MM-YYYY: ");

// console.log(date.slice(0,2));
// console.log(date.slice(2,4));
// console.log(date.slice(4,8));

// let date2 = prompt("DD-Month-YYYY: ");

// console.log(date2.slice(0,2));
// console.log(date2.slice(2,5));
// console.log(date2.slice(5));

let fileName = prompt("What is the file name: ?");
// let extension = fileName.slice(-3);
let extension = fileName.slice(fileName.length -3 )
if(extension=="jpg"||extension=="png"){
    console.log("It is a image file");
}else{
    console.log("It is not a image file");
    
}

// another method 
// let extension = fileName.slice(filename.length -3 )