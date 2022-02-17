let first = document.querySelectorAll(".first li");

// first.forEach((box, index) => {
//     box.addEventListener("click", (event) => {
//         event.target.innerText = index + 1;

//         setTimeout(() => {
//             event.target.innerText = "";
//         }, 5000)
//     })
// })

first.forEach((box, index) =>{
    box.addEventListener("click", (event) => {
        event.target.innerText = index + 1;
        
        setTimeout(() => {
            event.target.innerText = "";
        }, 5000)
    })
})