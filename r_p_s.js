// The function computer play takes the array, and chooses the three array choices at random.
function computerPlay() {
  let string = ["rock","paper","scissors"];
  let computerOutput = string[Math.floor(Math.random()*string.length)]; 
  return computerOutput
}
// Variables to keep track of the player score, computer score, and the amount of rounds.
let playerscore = 0
let computerscore = 0
let i = 0

function playGame() {
//While loop to loop the game five times.

while (i < 5) {
  //Prompt to input text then converts to lowercase removes whitespaces.  
  userInput=window.prompt("Lets play rock, paper, scissors! Enter your choice:");
  let userLowerCase=userInput.toLowerCase();
  let userInputfinal=userLowerCase.trim();
  //Computer Selection takes the output from the fnxComputerPlay
  let computerSelection=computerPlay();
if (userInputfinal=="rock" && computerSelection=="rock") {
  alert(`The computer picks:` + (computerSelection)+ ' It is a tie!');
  alert(`The computer score is:` + (computerscore)+ ' The player score is '+ (playerscore));
   
} else if  (userInputfinal=="rock" && computerSelection=="scissors") {
    alert(`The computer picks:` + (computerSelection)+ ` Congratulations you win! Rock beats Scissors!`);
    i++;
    playerscore ++;
    alert(`The computer score is:` + (computerscore)+ ' The player score is '+ (playerscore));


} else if  (userInputfinal=="rock" && computerSelection=="paper") {
    alert(`The computer picks:` + (computerSelection)+ ` Sorry you lost! Paper beats rock!`);  
    i++;
    computerscore++;
    alert(`The computer score is:` + (computerscore)+ ' The player score is'+ (playerscore));

} else if  (userInputfinal=="scissors" && computerSelection=="scissors") {
  alert(`The computer picks:` + (computerSelection)+ ` It is a tie!`);
  alert(`The computer score is:` + (computerscore)+ ' The player score is '+ (playerscore));

  
} else if  (userInputfinal=="scissors" && computerSelection=="paper") {
  alert(`The computer picks:` + (computerSelection)+ ` Congratulations you win! Scissors beats paper!`);
  i++;
  playerscore ++;
  alert(`The computer score is:` + (computerscore)+ ' The player score is '+ (playerscore));

} else if  (userInputfinal=="scissors" && computerSelection=="rock") {
  alert(`The computer picks:` + (computerSelection)+ ` Sorry you lost! Rocks beats Scissors!`);
  i++;
  computerscore++;
  alert(`The computer score is:` + (computerscore)+ ' The player score is '+ (playerscore));

} else if  (userInputfinal=="paper" && computerSelection=="paper") {
  alert(`The computer picks:` + (computerSelection)+ ` It is a tie!`);
  alert(`The computer score is:` + (computerscore)+ ' The player score is '+ (playerscore));

  
} else if  (userInputfinal=="paper" && computerSelection=="scissors") {
  alert(`The computer picks:` + (computerSelection)+ ` Sorry you lost! Scissors beats paper!`);
  i++;
  computerscore++;
  alert(`The computer score is:` + (computerscore)+ ' The player score is '+ (playerscore));

} else if  (userInputfinal=="paper" && computerSelection=="rock") {
  alert(`The computer picks:` + (computerSelection)+ ` Congratulations you won! Paper beats rock!`);
  i++;
  playerscore ++
  alert(`The computer score is:` + (computerscore)+ ' The player score is '+ (playerscore));

} else {
  alert("You didn't choose rock,paper,or scissors! Try again")
}

if (playerscore == 5 && computerscore ==0) {
  alert('You beat the computer');

} else if  (playerscore == 4 && computerscore ==1) {
  alert('You beat the computer');
} else if  (playerscore == 3 && computerscore ==2) {
  alert('You beat the computer');

} else if  (computerscore == 5 && playerscore ==0) {
  alert('The computer beat you');

} else if  (computerscore == 4 && playerscore ==1) {
  alert('YThe computer beat you');

} else if  (computerscore == 3 && playerscore ==2) {
  alert('The computer beat you');
}
}
}




