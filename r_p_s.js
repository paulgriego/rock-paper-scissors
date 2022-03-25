function computerPlay() {
  let string = ["rock","paper","scissors"];
  let computerOutput = string[Math.floor(Math.random()*string.length)]; 
  return computerOutput
}
userInput=window.prompt("Lets play rock, paper, scissors! Enter your choice:");
userInputCaseInsenstive=userInput.toLowerCase();
computerSelection=computerPlay()
console.log(userInputCaseInsenstive)

