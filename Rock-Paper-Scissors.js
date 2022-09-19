const prompt = require('prompt-sync')({sigint: true});

let player1 = Number(prompt("Player 1: please enter: \n 1. Rock \n 2. Paper \n 3. Scissors  \nEnter Number Here: ")); 
console.log(player1);

let player2 = Number(prompt("Player 2: please enter: \n 1. Rock \n 2. Paper \n 3. Scissors  \nEnter Number Here: ")); 
console.log(player2);

/* 1Rock beats 3scissors if(player1 === 1 && player2 === 3)
3Scissors cut 2paper (player1 === 3 && player2 ===2)
2Paper covers 1rock (player1 ==== 3 && player2 === 1)
*/

if(player1 === 1 && player2 === 3){
    console.log("Rock beats scissors! \n Player 1 wins!");
} else if(player1 === 3 && player2 === 2){
    console.log("Scissors cut paper! \n Player 1 wins!");
} else if(player1 === 2 && player2 === 1){
    console.log("Paper covers rock! \n Player 1 wins!");
} else if(player2 === 1 && player1 === 3){
    console.log("Rock beats scissors! \n Player 2 wins!");
} else if(player2 === 3 && player1 ===2){
    console.log("Scissors cut paper! \nPlayer 2 wins!");
} else if(player2 === 2 && player1 === 1){
    console.log("Paper covers rock! \nPlayer 2 wins!");
} else if(player1 === 1 && player2 === 1){
    console.log("It's tie! \nPlay again!");
} else if(player1 === 2 && player2 ===2){
    console.log("It's tie! \nPlay again!");
} else if((player1 === 3 && player2 === 3)){
    console.log("It's tie! \nPlay again!");
} else {
    console.log("Invalid operator");   
}

