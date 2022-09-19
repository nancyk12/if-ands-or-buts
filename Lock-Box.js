const prompt = require('prompt-sync')({sigint: true});


let pinCode = Number(prompt("Please enter your PIN: "));
console.log(pinCode);


if(pinCode === 1234){
    console.log("Success!");
} else if(pinCode !== 1234){
    console.log("Failure!");
} 


