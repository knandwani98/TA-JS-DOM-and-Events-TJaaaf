// let game = document.querySelector(".game");
let grid = document.querySelector(".grid");

{/* <div class="card front">
</div> */}

// doubling the cards
let allCards = cardsArray.concat(cardsArray);

// function createUI (dataArray = allCards) {
    // }

    allCards.sort(() => 0.5 - Math.random());
allCards.forEach(char => {
    // created div
    const card = document.createElement("div");
    // added class to div 
    card.classList.add("card", "front");
    card.setAttribute("data-name", char.name);
    card.style.backgroundImage = `url(${char.img})`;
    
    // apended div into grid which is grid
    grid.appendChild(card);
    return;
})

// createUI();


// sorting cards in random orders

let count = 0, firstGuess = "", secondGuess = '';


grid.addEventListener("click", (event) => {
    let clicked = event.target;

    if(clicked.nodeName === "SECTION"){
        return;
    }
    
    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.dataset.name;
            clicked.classList.add('selected');
        }
        else {
            secondGuess = clicked.dataset.name;
            clicked.classList.add('selected');
        }
    }

    function match () {
        var selected = document.querySelectorAll(".selected");
        selected.forEach((card) => {
            card.classList.add("match");
        })
    }

    let previousTarget = null;
    
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget) {
        return;
    }

    if (firstGuess !== '' && secondGuess !== '') {
        if (firstGuess === secondGuess) {
            match();
        }
        previousTarget = clicked;
    }
})