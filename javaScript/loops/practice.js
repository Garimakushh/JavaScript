for(let i=0;i<=100;i++){
    if(i % 2 ===0){
    console.log("Even numbers are :");
    console.log(i);
    }
}
//game of guessing a correct number
let gameNum = 25;
let userNum = prompt("Guess the game number : ");

while(userNum != gameNum){
     userNum = prompt("You geuss a wrong number...try again");
}
console.log("Congratulation you got the game number");