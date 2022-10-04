let names =["zoe","Yennifer","Vincent","Sandy","Thomas"];

//keep the name of those whos longer than 5 char;

let ans = names.filter(function(value){
    return value.length >5;
})
console.log(ans)
