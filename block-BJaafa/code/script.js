console.log(allColors);

let root = document.querySelector(".container");

function generateIndex (max){
    return Math.floor(Math.random() * max);
}

function clickHandle () {
    root.innerHTML = "";
    
    let h1 = document.createElement("h1");

    root.append(h1);
    
    // console.log(allColors[generateIndex(allColors.length)]);
    root.style.backgroundColor = allColors[generateIndex(allColors.length)].hexCode;
    h1.innerText = allColors[generateIndex(allColors.length)].colorName;
}

root.addEventListener("click", clickHandle);