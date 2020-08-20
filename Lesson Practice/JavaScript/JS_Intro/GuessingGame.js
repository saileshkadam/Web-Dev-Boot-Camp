//Create secret number
var play = true;
var randNum = Math.ceil(Math.random()*100);
console.log(randNum)
while(play){
//ask user for guess
guess = prompt("Guess a number between 1 and 100! " + randNum)

//check guess
if(guess > randNum){
    alert("Too High")
}
else if(guess < randNum){
    alert("Too Low")
}
else if (guess == randNum){
    alert("You guessed it!")
    play = false;
}
}