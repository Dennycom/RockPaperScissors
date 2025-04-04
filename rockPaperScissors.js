console.log("Hello World!");

function getComputerChoice(){
    let computerTurn; //random number played by computer
    let minVal = 1; // lower value
    let maxVal = 3; //upper value
    
    computerTurn = Math.floor(Math.random() * (maxVal-minVal + 1)) + minVal //get random no 
    //between 1 and 3

    if (computerTurn === 1) {
        return "Rock";
    }else if (computerTurn === 2) {
        return "Paper";
    }else
        return "Scissors";


}
alert(getComputerChoice()); // test if this function is working fine on webpage.
console.log(getComputerChoice()) // test if function is working fine on console

let randomNum = getComputerChoice(); //test if function is working
console.log(randomNum);
alert(randomNum); 

 function getHumanChoice(){
    //let userInput = prompt("Rock Paper or Scissors?" , " " );
    let userInput = prompt("Rock, Paper or Scissors?" , " " ); //ask user to choose between Rock, Paper or Scissors
   
    if (userInput == "Rock") {        
        return "Rock";
    }else if (userInput == "Paper") {
        return "Paper";
    }else {
        return "Scissors";
    }
}
 let testfunction = getHumanChoice(); //assign a variable to the result of calling getHumanChoice function
 console.log(testfunction);  //test to see if getHuman function is working properly-what does it output in the console?

 

  