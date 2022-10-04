function compare(a,b){
    if(a==b){
        return 0;  // if a and b is the same number
    }else if(a<b){
        return -1; // return -1 (any neg number  if  come before b);
    }else{
        return 1;  // or any pos number if b come before a 
    }
}

let numbers =[3,4,6,8,1,2,10,11,20,21];
numbers.sort();// js sort them as strings.
console.log(numbers);


// use the compare as callback function
numbers.sort(compare);
console.log("sorting with our compare function==>",numbers);

// to learn more search for mdn compareEN


// bubble sort
let numberr=[13,2,5,10,25];
for(let h=0; h<numberr.length; h++){
    for(let i =0 ;  i<numberr.length -1 ; i++){
        if(numberr[i]>numberr[i+1]){
        let temp = numberr[i];
        numberr[i]= numberr[i+1];
        numberr[i+1]= temp;
       }
    }
}

// anonymous function is more like a 1 time use
// anonymous function can be store into variable

