// The function computer play takes the array, and chooses the three array choices at random.
function computerPlay() {
    string = ["rock","paper","scissors"];
    computerChoice=string[Math.floor(Math.random()*string.length)]; 
    return computerChoice;
}