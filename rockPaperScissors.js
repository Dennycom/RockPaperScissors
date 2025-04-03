console.log("Hello World!");

function getComputerChoice(){
    let computerTurn; //random number played by computer
    let minVal = 1; // lower value
    let maxVal = 3; //upper value
    
    computerTurn = Math.floor(Math.random() * (maxVal-MinVal + 1)) + minVal //get random no 
    //between 1 and 3

    if (computerTurn === 1) {
        return "Rock";
    }else if (computerTurn === 2) {
        return "Paper";
    }else
        return "Scissors";

}