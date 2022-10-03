const prompt = require("prompt-sync")();

let name = prompt("Name: ?");

console.log("Dear", name ,"\n \t I cant' believe that it's been more than six months since we spoke. You remember the songs ?\n Should auld acquaintance be forgot,\nand never brought to mind?\nshould ai;d acquatance be forgot,\nand auld lang syne?\n\"Merry Xmas and a Happy New Year!\"")

// the text literal stats with the backtick ` 
// the ways that the backtick is awesome

// 1. you can use enter and any whitespace and it will be respected.
// 2. You can ue all the special characters you want 
console.log(` Abby says, "This is indeed the greatest debate of all time.
        I don't have any advice for you"`)

// 3. You can embed variables into it easily

let fname ="Ah kow";
let surname ="Tan";
let billAmount =500;
let dateDue =28/10/2022;

// Without using back tick String
console.log("Dear",fname,surname,"you blah blah amounts of" , billAmount,"isdue", dateDue);

// to embed variable using backtick string any ${} will have its content evaluated as js

console.log(`Dear ${fname}${surname},
        Your bill of $${billAmount}`)
        ;      

// String is immutable