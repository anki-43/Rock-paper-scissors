
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let result = document.querySelector(".win-status");
let userScore = document.querySelector(".user-score");
let computerScore = document.querySelector(".computer-score")
let winc = 0, losec = 0;

function checkforwin(status){
  const arr = ["rock", "paper", "scissors"];
  let index = Math.trunc(Math.random()*3);
  let combination = status + arr[index];
  console.log(combination);
  if(combination === "rockrock" || combination === "paperpaper" || combination === "scissorsscissors"){

        losec++;
        winc++;
       
        result.innerHTML = "Its a draw";
      
        userScore.innerHTML = winc;
        computerScore.innerHTML = losec;

  }else if(combination === "rockpaper"){
        
        losec++;
        result.innerHTML = "Paper covers rock, You LOSE";
        computerScore.innerHTML = losec;

  }else if(combination === "paperscissors"){
        
        losec++;
        result.innerHTML = "Scissors cuts Paper, You LOSE";
        computerScore.innerHTML = losec;

  }else if(combination === "scissorsrock"){
        
        losec++;
        result.innerHTML = "Scissors can't cut rock, You LOSE";
        computerScore.innerHTML = losec;

  }else if(combination === "rockscissors"){
        
        winc++;
        result.innerHTML = "Scissors can't cut rock, You WIN";
        userScore.innerHTML = winc;

  } else if(combination === "scissorspaper"){
        
        winc++;
        result.innerHTML = "Scissors cuts Paper, You WIN";
        userScore.innerHTML = winc;

  } else if(combination === "paperrock"){
        
        winc++;
        result.innerHTML = "Paper covers rock, You WIN";
        userScore.innerHTML = winc;
  } 

  result.classList.add("afterCheck");

}

rock.addEventListener("click", ()=>{
     checkforwin("rock");
})

paper.addEventListener("click", ()=>{
    checkforwin("paper");
})

scissors.addEventListener("click", ()=>{
    checkforwin("scissors");
})


