// the big process in functional mapping

///Mapping
//tahe one element from the source array
// do some changes to it
// then put into destination array

let names=["Abel","Cain","Dennis","Benjamin","Fredrick"];
let bigNames =[];
for (let n of names){
    let uppercase = n.toUpperCase();
    bigNames.push(uppercase);
}
console.log(bigNames);

// map function took a function as paramenter
// mapping function has two argument
// first argu,ment : current Element
// 2nd argument  : element inde xnumber
// return what to put in destination arrwow;

let ans =names.map(function(value,index){
return value.toUpperCase()
} )
console.log(ans)