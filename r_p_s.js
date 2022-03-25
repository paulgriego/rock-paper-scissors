function computerPlay() {
  let string = ["rock","paper","scissors"];
  let computerOutput = string[Math.floor(Math.random()*string.length)]; 
  return computerOutput
}
userInput=window.prompt("Lets play rock, paper, scissors! Enter your choice:");
userInputCaseInsenstive=userInput.toLowerCase();
computerSelection=computerPlay()


if (userInputCaseInsenstive=="rock" && computerSelection=="rock") {
  alert(`The computer picks:` + (computerSelection)+ ' It is a tie!');
} else if  (userInputCaseInsenstive=="rock" && computerSelection=="scissors") {
    alert(`The computer picks:` + (computerSelection)+ ` Congratulations you win! Rock beats Scissors!`);
} else if  (userInputCaseInsenstive=="rock" && computerSelection=="paper") {
    alert(`The computer picks:` + (computerSelection)+ ` Sorry you lost! Paper beats rock!`);  
} else if  (userInputCaseInsenstive=="scissors" && computerSelection=="scissors") {
  alert(`The computer picks:` + (computerSelection)+ ` It is a tie!`);
} else if  (userInputCaseInsenstive=="scissors" && computerSelection=="paper") {
  alert(`The computer picks:` + (computerSelection)+ ` Congratulations you win! Scissors beats paper!`);
} else if  (userInputCaseInsenstive=="scissors" && computerSelection=="rock") {
  alert(`The computer picks:` + (computerSelection)+ ` Sorry you lost! Rocks beats Scissors!`);
} else if  (userInputCaseInsenstive=="paper" && computerSelection=="paper") {
  alert(`The computer picks:` + (computerSelection)+ ` It is a tie!`);
} else if  (userInputCaseInsenstive=="paper" && computerSelection=="scissors") {
  alert(`The computer picks:` + (computerSelection)+ ` Sorry you lost! Scissors beats paper!`);
} else if  (userInputCaseInsenstive=="paper" && computerSelection=="rock") {
  alert(`The computer picks:` + (computerSelection)+ ` Congratulations you won! Paper beats rock!`);
} else {
  alert("You didn't choose rock,paper,or scissors! Try again")
}