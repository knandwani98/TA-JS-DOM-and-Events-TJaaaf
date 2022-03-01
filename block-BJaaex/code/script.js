// let game = document.querySelector(".game");
let grid = document.querySelector(".grid");

{/* <div class="card front">
</div> */}

// doubling the cards
let allCards = cardsArray.concat(cardsArray);

// sorting cards in random orders
allCards.sort(() => 0.5 - Math.random());

let count = 0, firstGuess = "", secondGuess = '', previousTarget = null, delay = 1200;

allCards.forEach(char => {
    // created div
    const {name, img} = char;

    const card = document.createElement("div");
    // added class to div 
    card.classList.add("card");
    card.setAttribute("data-name", name);
    
    const front = document.createElement('div');
    front.classList.add("front");
    
    const back = document.createElement('div');
    back.classList.add("back");
    back.style.backgroundImage = `url(${img})`;

    // apended div into grid which is grid
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back); 
    // return;
})

// createUI();

const match = () =>  {
    const selected = document.querySelectorAll(".selected");
    selected.forEach(card => {
        card.classList.add("match");
    });
};


function resetGuesses () {
    firstGuess = '', secondGuess = '', count = 0, previousTarget = null;

    var selected = document.querySelectorAll(".selected");
    selected.forEach((card) => {
        card.classList.remove('selected');
    })
    return;
}


grid.addEventListener("click", (event) => {
    
    const clicked = event.target;
    
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
        return;
    }
    

    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            // console.log(firstGuess);
            clicked.parentNode.classList.add('selected');
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            // console.log(secondGuess);
            clicked.parentNode.classList.add('selected');
        }
    
        if (firstGuess && secondGuess ) {
            if (firstGuess === secondGuess) {
                setTimeout(match, delay);
            }

            setTimeout(resetGuesses, delay)
        }
        previousTarget = clicked;
    } 
});