let first = document.querySelectorAll(".first li");
let second = document.querySelector(".second");

first.forEach((box, index) =>{
    box.addEventListener("click", (event) => {
        event.target.innerText = index + 1;
        
        setTimeout(() => {
            event.target.innerText = "";
        }, 5000)
    })
})

let secondBoxes = second.querySelectorAll("li");
secondBoxes.forEach((box, index) => {
    box.setAttribute("data-text", index + 1);
})
second.addEventListener("click", (event) => {
    let text = event.target.dataset.text;
    event.target.innerText = text;
    setTimeout(() => {
        event.target.innerText = "";
    }, 5000)
});