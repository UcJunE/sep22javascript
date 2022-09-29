function foobar(x){
    x=x+3;
}
let x = 10;  
foobar(x); // x variable will be simplified to 10 first
            // and the int 10 is the on passed to the local x in foobar.
            // since int 10 is a value
            // this mechanism of assigning 10 to the local x in foobar
            // is known as Pass by value

            // always remember if a function and there is no return keyword = underfined
            // take note of the scope also.

console.log("x=",x);

// reference = array , object , function
// PASS BY reference because y contains a reference to the array and the local y variable 
// of foof function will be passed that reference , so both y variable actually refer to the same array

function foo(y){
    y.push("banana");
}
let y =["apples","durian","mangoesteen"]
foo(y);
console.log(y)

