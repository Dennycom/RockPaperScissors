console.log("Hello World!");

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
    //let userInput = prompt("Rock Paper or Scissors?" , " " );
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

 
/*function playRound(humanChoice, computerChoice) {
    
     humanChoice = getHumanChoice();
    
    // convert any input by user to upper case to make it acceptable even if players input lower case, upper case, mixed upper & lower case etc
    humanChoice = humanChoice.toUpperCase();
     computerChoice = getComputerChoice();
     

    
    // logic to determine the winner
    if (humanChoice == "PAPER" && computerChoice == "ROCK" || humanChoice == "ROCK" && computerChoice == "SCISSORS" || humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        console.log( "You win!!!");
    }else if (humanChoice == "PAPER" && computerChoice == "SCISSORS" || humanChoice == "ROCK" && computerChoice == "PAPER" || humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        console.log("You lose, Try again!");
    }else {
        console.log("It's a draw!!!");
    }     



}*/
//const computerPick = getComputerChoice();
//const humanPick = getHumanChoice();
//playRound(computerPick, humanPick);

function playRound(humanChoice, computerChoice){
    

   if (humanChoice == "SCISSORS" && computerChoice == "PAPER" || humanChoice == "ROCK" && computerChoice == "SCISSORS" || humanChoice == "PAPER" && computerChoice == "ROCK") {

    console.log( "You win!!!");
    humanScore +=1;
}else if (humanChoice == "PAPER" && computerChoice == "SCISSORS" || humanChoice == "ROCK" && computerChoice == "PAPER" || humanChoice == 
          "SCISSORS" && computerChoice == "ROCK") {
    console.log("You lose, Try again!");
    computerScore = computerScore + 1;
    
}else {
    console.log("It's a draw!!!");
}     

}
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

function playGame() {
    
}
    