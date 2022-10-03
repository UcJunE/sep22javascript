// string manipulation
// copy of a original string and return it uppercare = toUppercase()

// the original string doest not change because string is immutable

let bloated = "   I am very full";
console.log(bloated.trim()+"!");

// to trim away the extra spacing 

console.log(bloated.replace("full","thin"));
console.log(bloated);   

// always remember string is immutable \\

// string checking
// --return true or false
// --return integer
let word = "Jack and Jill went up the hill"

console.log(word.includes("Jill"));

// this is includes() returns true if the given parameter is a substring of the string .
// it is a substring of the String
// it is case sensitive ! be mindfull of the upper and lowercase

// alternate way
// word.toLowerCase().includes("jill");


// indexOf()
// to get the index of the string itself
// for indexOf() if there are multiple matches , only the first will be returned

let email = "banana@hotmail.com";
let atIndex = email.indexOf("@");
console.log("domain=",email.slice(atIndex+1));

// split function is super important
// it will split with the parameter provided  into Array



