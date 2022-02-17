let disco = document.querySelector(".disco");

let getRandomColor = () => {
    let color = "#"
    let hexChar = ['0', "1", "2", '3', "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * 16);
        color = color + hexChar[randomNum];
    }
    return color;
}

// Random Number = 500
let getRandomNum = () => {
    let num = Math.floor(Math.random() * 500);
    return num;
}

// Grids
for (let i = 0; i < 500; i++){
    let div = document.createElement("div");
    div.setAttribute("class", "grid");
    let randomNum = getRandomNum();
    div.innerText = randomNum;
    disco.append(div);
}

// Hover
let gridHover = () => {
    let grids = document.querySelectorAll(".grid");
    grids.forEach ((grid) => {
    let randomColor = getRandomColor();
    grid.style.backgroundColor = randomColor;
    let randomNum = getRandomNum();
    grid.innerHTML = randomNum;
    })
}

disco.addEventListener("mousemove", gridHover);