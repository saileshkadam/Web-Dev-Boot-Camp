var P1Input = document.getElementById("P1Button")
var P2Input = document.getElementById("P2Button")
var resetButton = document.getElementById("ResetButton")
var scoreInput = document.querySelector("input")
var maxScore = 5;
var P1Score = 0;
var P2Score = 0;

function updateScore(){

    if(P1Score == maxScore){
        document.getElementById("pOneScore").style.color="green";
    }else if(P2Score == maxScore){
        document.getElementById("pTwoScore").style.color="green";
    }else{
    }
    document.getElementById("pOneScore").textContent = P1Score;
    document.getElementById("pTwoScore").textContent = P2Score;   
}

function reset(){
    maxScore = 5;
    P2Score = 0;
    P1Score = 0;
    document.querySelector("#maxScore").textContent = maxScore;
    document.getElementById("pOneScore").style.color= "steelblue";
    document.getElementById("pTwoScore").style.color="steelblue"
    updateScore();
}

P1Input.addEventListener("click",function(){
    if((P1Score < maxScore) || (P1Score < maxScore)){
        P1Score++;
        updateScore(); 
    }else{

    }
})
P2Input.addEventListener("click",function(){
    if((P1Score < maxScore) || (P1Score < maxScore)){
        P2Score++;
        updateScore(); 
    }else{

    }
          
})
resetButton.addEventListener("click", function(){
     reset();
})
scoreInput.addEventListener("input",function(e){
    maxScore = e.target.value;
    document.querySelector("#maxScore").textContent = maxScore;
})


