//console.log and return are two different things.

function foobar(){
    console.log(123); //display to the screen
                    // function is undefined because there is no return statements.
}

// if the result fo the function is be used in another function or another calculation  make sure to use return


let f = foobar();
console.log("f=",f);