//optional arguments
//Assume gst is already a percentage(7%=0.07);
function calculateNetBill(bill,gst=0.07){
    return bill*(1 +gst);
}

console.log("Net bill for 100=" ,calculateNetBill(100,0.07));
console.log("Net bill for 100=" ,calculateNetBill(200));
console.log("Net bill for 100=" ,calculateNetBill(100,0.08));

// if mix compulsory and optional , always put the compulsory first
// compulsory as in the parameter that we need to pass a value into it 
