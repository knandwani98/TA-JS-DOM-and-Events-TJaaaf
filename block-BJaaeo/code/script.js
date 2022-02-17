let display = document.querySelector(".display");
let initialValue = 0;

display.innerText = initialValue;

let allBtn = document.querySelectorAll("button");
allBtn.forEach((btn) => {
    function handleBtnClick (event) {
        if (btn.classList.contains('clear')) {
            return display.innerText = initialValue;
        }
        if (btn.classList.contains('equal')) {
            display.innerText = eval(display.innerText);
            return;
        }
        if(display.innerText == initialValue) {
            display.innerText = event.target.innerText;
            return
        } else {
            return display.innerText += event.target.innerText;
        }
    }
    btn.addEventListener("click", handleBtnClick);
})