// array can store multiple values into one variable

// The different between string and array are...
// Arrays are mutable 

// we can change the data inside a array by using it index and  assign the new value to the data itself.Arrays

// splice function
// it takes in 2 arguments
// first argument : the index to start delete from,
// second argument : how many to delete from the index,
// third argument : the new array to put in from the first argument
// return value will be the elements that you have deleted or replaced

let names =[ "abel","ben","cindy","daniel","eddie"];

//del cindy and daniel.

names.splice(3,2);
console.log("After names.splice(3,2=>",names);

let students =[ "abel","ben","cindy","daniel","eddie"];

let xferstudents= ["fish","duck"];

students.splice(2,2,"fish","duck");

console.log(students)

// main reason to use splice function when u want to replace multiple data