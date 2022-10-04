// the name of the function is actually a reference
// the name of the function is actually a variable too

function foobar(){
    return 123;
}
// asumme that func is  some kind of function
// we can pass function into another function as arguments.
function doSomething(func){
 let b = func();
 console.log(b);
};
doSomething(foobar);

console.log(foobar);

let f = foobar;
console.log(f());
