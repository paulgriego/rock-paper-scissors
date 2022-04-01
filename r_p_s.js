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
 
 
 let i = 0
 let playerscore = 0
 let computerscore = 0

 function playRound(x, y ) {
   
   if (x=="rock" && y=="rock") {
    document.getElementById('Result').innerHTML="The computer picks rock it is a tie!";
    document.getElementById('Score').innerHTML=`The computer score is: ` + (computerscore)+ ` The player score is: ` + (playerscore);
    document.getElementById('RoundsPlayed').innerHTML=`Rounds Played: `+ (i);
    }
   else if  (x=="rock" && y=="paper") {
    i++;
    computerscore++;
    document.getElementById('Result').innerHTML="The computer picked paper you lost";
    document.getElementById('Score').innerHTML=`The computer score is: ` + (computerscore)+ ` The player score is: ` + (playerscore);
    document.getElementById('RoundsPlayed').innerHTML=`Rounds Played: `+ (i);
    }
   else if  (x=="rock" && y=="scissors") {
    i++;
    playerscore++; 
    document.getElementById('Result').innerHTML="The computer picked scissors you won";
    document.getElementById('Score').innerHTML=`The computer score is: ` + (computerscore)+ ` The player score is: ` + (playerscore);
    document.getElementById('RoundsPlayed').innerHTML=`Rounds Played: `+ (i);
    }
   else if  (x=="paper" && y=="scissors") {
    i++;
    computerscore++ 
    document.getElementById('Result').innerHTML="The computer picked scissors you lost";
    document.getElementById('Score').innerHTML=`The computer score is: ` + (computerscore)+ ` The player score is: ` + (playerscore);
    document.getElementById('RoundsPlayed').innerHTML=`Rounds Played: `+ (i);
    }
   else if (x=="paper" && y=="rock") {
    i++;
    playerscore ++;
    document.getElementById('Result').innerHTML="The computer picks rock you won!";
    document.getElementById('Score').innerHTML=`The computer score is: ` + (computerscore)+ ` The player score is: ` + (playerscore);
    document.getElementById('RoundsPlayed').innerHTML=`Rounds Played: `+ (i);
    }
   else if  (x=="paper" && y=="paper") {
      document.getElementById('Result').innerHTML="The computer picked paper its a tie";
      document.getElementById('Score').innerHTML=`The computer score is: ` + (computerscore)+ ` The player score is: ` + (playerscore);
      document.getElementById('RoundsPlayed').innerHTML=`Rounds Played: `+ (i);
    }
   else if  (x=="scissors" && y=="scissors") {
      document.getElementById('Result').innerHTML="The computer picked scissors its a tie";
      document.getElementById('Score').innerHTML=`The computer score is: ` + (computerscore)+ ` The player score is: ` + (playerscore);
      document.getElementById('RoundsPlayed').innerHTML=`Rounds Played: `+ (i);
      }
   else if (x=="scissors" && y=="rock") {
      i++;
      computerscore++;
      document.getElementById('Result').innerHTML="The computer picks rock you lost!";
      document.getElementById('Score').innerHTML=`The computer score is: ` + (computerscore)+ ` The player score is: ` + (playerscore);
      document.getElementById('RoundsPlayed').innerHTML=`Rounds Played: `+ (i);
   }
      
   else if  (x=="scissors" && y=="paper") {
      i++;
      playerscore ++;
      document.getElementById('Result').innerHTML="The computer picked paper you won";
      document.getElementById('Score').innerHTML=`The computer score is: ` + (computerscore)+ ` The player score is: ` + (playerscore);
      document.getElementById('RoundsPlayed').innerHTML=`Rounds Played: `+ (i);
      } 
    }
    
  function Diablebutton() {
    if (i==5) {
     document.getElementById("r").disabled = true;
     document.getElementById("p").disabled = true;
     document.getElementById("s").disabled = true;
     document.getElementById('GameOver').innerHTML='You have played five rounds!'  
    }
  }

  function WhoWon() {
    if (playerscore == 5 && computerscore ==0) {
      document.getElementById("Winner").innerHTML='You beat the computer';
    
    } else if  (playerscore == 4 && computerscore ==1) {
      document.getElementById("Winner").innerHTML='You beat the computer';
    } else if  (playerscore == 3 && computerscore ==2) {
      document.getElementById("Winner").innerHTML='You beat the computer';
    
    } else if  (computerscore == 5 && playerscore ==0) {
      document.getElementById("Winner").innerHTML='The computer beat you';
    
    } else if  (computerscore == 4 && playerscore ==1) {
      document.getElementById("Winner").innerHTML='The computer beat you';
    
    } else if  (computerscore == 3 && playerscore ==2) {
      document.getElementById("Winner").innerHTML='The computer beat you';
  }
}


   
  
  
  

 


