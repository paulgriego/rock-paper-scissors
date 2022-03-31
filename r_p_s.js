// The function computer play takes the array, and chooses the three array choices at random.
function computerPlay() {
    string = ["rock","paper","scissors"];
    computerChoice=string[Math.floor(Math.random()*string.length)]; 
    return computerChoice;
}
//This function uses a onClick to grab the value of each button and if the case is equal to the value return to UserInput the correct variable. 
let userInput
 function userPlay(userSelection) {
  switch(userSelection)
  {
  case "rock":
    return userInput="rock"
  case "paper":
    return userInput="paper"
  case "scissors":
    return userInput="scissors";
  }
}

//This compares the userInput vs the ComputerPlay and outputs the result of the game.
 
 
 let i = 1
 let playerscore = 1
 let computerscore = 1
 function playRound(x, y ) {
   
   if (x=="rock" && y=="rock") {
    console.log("The computer picks rock it is a tie!");
    console.log(i);
    }
   else if  (x=="rock" && y=="paper") {
    console.log("The computer picked paper you lost");
    console.log(i);
    console.log(computerscore);
    i++;
    computerscore++;
    }
   else if  (x=="rock" && y=="scissors") {
    console.log("The computer picked scissors you won");
    console.log(i);
    console.log(playerscore);
    i++;
    playerscore ++;

    }
   else if  (x=="paper" && y=="scissors") {
    console.log("The computer picked scissors you lost");
    console.log(i);
    console.log(computerscore);
    i++;
    computerscore++;
    }
   else if (x=="paper" && y=="rock") {
    console.log("The computer picks rock you won!");
    console.log(i);
    console.log(playerscore);
    i++;
    playerscore ++;
    }
   else if  (x=="paper" && y=="paper") {
    console.log("The computer picked paper its a tie");
    console.log(i);
    }
   else if  (x=="scissors" && y=="scissors") {
      console.log("The computer picked scissors its a tie");
      console.log(i);
      }
   else if (x=="scissors" && y=="rock") {
      console.log("The computer picks rock you lost!");
      console.log(i);
      console.log(computerscore);
      i++;
      computerscore++;
      }
   else if  (x=="scissors" && y=="paper") {
      console.log("The computer picked paper you won");
      console.log(i);
      console.log(playerscore);
      i++;
      playerscore ++;
      }
    }

   
  
  
  

 


