let resultBox = document.querySelector(".result-box");
let h3 = document.createElement("h3");
let result = h3.innerText;
resultBox.append(h3);


let allBtn = document.querySelectorAll(".btn");
allBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        console.log(event.target);
    })
})