let playerCtrl = document.querySelectorAll(".player .far");
let resetIcon = document.querySelector(".reset-icon");

let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");
let initialValue = 0;
function clickHandle (event) {
   event.target.style.color = "black";
}

playerCtrl.forEach((btn) => {
    btn.addEventListener("click", clickHandle);
})
