console.log("Hello World, game time!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerTurn; //random number played by computer
    let minVal = 1; // lower value
    let maxVal = 3; //upper value
    
    computerTurn = Math.floor(Math.random() * (maxVal-minVal + 1)) + minVal //get random no 
    //between 1 and 3

    if (computerTurn === 1) {
        return "ROCK";
    }else if (computerTurn === 2) {
        return "PAPER";
    }else {
        return "SCISSORS";
    }
}

/*alert(getComputerChoice()); // test if this function is working fine on webpage.
console.log(getComputerChoice()) // test if function is working fine on console

let randomNum = getComputerChoice(); //test if function is working
console.log(randomNum);
alert(randomNum); */

 function getHumanChoice(){
    
    let userInput = prompt("Rock, Paper or Scissors?" , " " ); //ask user to choose between Rock, Paper or Scissors
    userInput = userInput.toUpperCase();
    if (userInput == "ROCK") {        
        return "ROCK";
    }else if (userInput == "PAPER") {
        return "PAPER";
    }else {
        return "SCISSORS"; 
    } 
   return userInput;
}


//let testfunction = getHumanChoice(); //assign a variable to the result of calling getHumanChoice function
 //console.log(testfunction);  //test to see if getHuman function is working properly-what does it output in the console?

 

function playGame(){

function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

   if (humanChoice == "SCISSORS" && computerChoice == "PAPER" || humanChoice == "ROCK" && computerChoice == "SCISSORS" || humanChoice == "PAPER" && computerChoice == "ROCK") {
    console.log("You: " + humanChoice + ", Computer: " + computerChoice); // display each player selection, again on line 63 
    console.log( "You win!!!");
    humanScore +=1; //update score
    console.log("Your score: " + humanScore + ", Computer Score: " + computerScore); //display each player score, again on line 66
}else if (humanChoice == "PAPER" && computerChoice == "SCISSORS" || humanChoice == "ROCK" && computerChoice == "PAPER" || humanChoice == 
          "SCISSORS" && computerChoice == "ROCK") {
    console.log("You: " + humanChoice + ", Computer: " + computerChoice);
    console.log("You lose, Try again!");
    computerScore = computerScore + 1; //update score
    console.log("Your score: " + humanScore + ", Computer Score: " + computerScore);
    
}else {
    console.log("You: " + humanChoice + ", Computer: " + computerChoice);
    console.log("It's a draw!!!");
    console.log("Your score: " + humanScore + ", Computer Score: " + computerScore);
    
}     

}
    console.log( "ROUND ONE:");
    playRound();

    console.log("ROUND TWO:");
    playRound();
    console.log("ROUND THREE");
    playRound();
    console.log("ROUND FOUR: ");
    playRound();
    console.log("ROUND FIVE:");
    playRound();
}

playGame();
//decide party with most points:
if ( computerScore > humanScore) {
    console.log("Overall winner: Computer")
}else if (humanScore > computerScore) {
    console.log( "Overall winner: You")
}else {
    console.log("It is a draw!");
}