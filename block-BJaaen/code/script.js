let playerPanel = document.querySelector(".player-panel");
let computerPanel = document.querySelector(".computer-panel");

let dataSet = [
    {
        name: "rock",
        beats: "scissors"
    },
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "scissors",
        beats: "paper"
    }
]

let player = document.querySelector(".player");
let computer = document.querySelector(".computer");
let resultBox = document.querySelector(".result-box");

let playerSelected = {}, computerSelected = {};

function generateRandomNum (max) {
    return Math.floor(Math.random() * max);
}

function createPlayerLayout () {
    playerPanel.innerHTML = "";

    dataSet.forEach((icon) => {
        let li = document.createElement("li");
        let i = document.createElement("i");
        i.className = `far fa-hand-${icon.name}`;

        li.addEventListener("click", () => {
            playerSelected = icon;
            computerSelected = dataSet[generateRandomNum(3)];

            if (playerSelected.name === computerSelected.name) {
                resultBox.innerText = "It's a tie."
            } else if (playerSelected.beats === computerSelected.name) {
                resultBox.innerText = "You Win!"
            } else {
                resultBox.innerText = "You Lose!"
            }

            createPlayerLayout();
            createComputerLayout();
        })
        
        if (playerSelected.name === icon.name) {
            i.classList.add ('selected');
        }

        li.append(i);
        playerPanel.append(li);
    })
    return;
}

createPlayerLayout();

function createComputerLayout () {
    computerPanel.innerHTML = "";
    dataSet.forEach((icon) => {
        let li = document.createElement("li");
        let i = document.createElement("i");
        i.className = `far fa-hand-${icon.name}`;

        if (computerSelected.name === icon.name) {
            i.classList.add ('selected')
        }

        li.append(i);
        computerPanel.append(li);
    })
    return;
}

createComputerLayout();

let reset = document.querySelector(".reset-icon");
reset.addEventListener("click", () => {
    playerSelected = {};
    computerSelected = {};
    createPlayerLayout();
    createComputerLayout();
    resultBox.innerText = "";
})