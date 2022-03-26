// The function computer play takes the array, and chooses the three array choices at random.


function computerPlay() {
  let string = ["rock","paper","scissors"];
  let computerOutput = string[Math.floor(Math.random()*string.length)]; 
  return computerOutput
}


userInput=window.prompt("Lets play rock, paper, scissors! Enter your choice:");
let userLowerCase=userInput.toLowerCase();
let userInputfinal=userLowerCase.trim();
let computerSelection=computerPlay();


if (userInputfinal=="rock" && computerSelection=="rock") {
  alert(`The computer picks:` + (computerSelection)+ ' It is a tie!');
} else if  (userInputfinal=="rock" && computerSelection=="scissors") {
    alert(`The computer picks:` + (computerSelection)+ ` Congratulations you win! Rock beats Scissors!`);
} else if  (userInputfinal=="rock" && computerSelection=="paper") {
    alert(`The computer picks:` + (computerSelection)+ ` Sorry you lost! Paper beats rock!`);  
} else if  (userInputfinal=="scissors" && computerSelection=="scissors") {
  alert(`The computer picks:` + (computerSelection)+ ` It is a tie!`);
} else if  (userInputfinal=="scissors" && computerSelection=="paper") {
  alert(`The computer picks:` + (computerSelection)+ ` Congratulations you win! Scissors beats paper!`);
} else if  (userInputfinal=="scissors" && computerSelection=="rock") {
  alert(`The computer picks:` + (computerSelection)+ ` Sorry you lost! Rocks beats Scissors!`);
} else if  (userInputfinal=="paper" && computerSelection=="paper") {
  alert(`The computer picks:` + (computerSelection)+ ` It is a tie!`);
} else if  (userInputfinal=="paper" && computerSelection=="scissors") {
  alert(`The computer picks:` + (computerSelection)+ ` Sorry you lost! Scissors beats paper!`);
} else if  (userInputfinal=="paper" && computerSelection=="rock") {
  alert(`The computer picks:` + (computerSelection)+ ` Congratulations you won! Paper beats rock!`);
} else {
  alert("You didn't choose rock,paper,or scissors! Try again")
}

