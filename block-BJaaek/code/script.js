let box1 = document.querySelector(".first");
let box2 = document.querySelector(".second");

let getRandomColor = () => {
    let hexCodes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f",];
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + hexCodes[Math.floor(Math.random() * 16)];
    }
return color;
}

let clickColor = () => {
    let randomColor = getRandomColor();
    box1.style.backgroundColor = randomColor;
}

let moveColor = () => {
    let randomColor = getRandomColor();
    box2.style.backgroundColor = randomColor;
}

box1.addEventListener("click", clickColor);
box2.addEventListener("mousemove", moveColor);