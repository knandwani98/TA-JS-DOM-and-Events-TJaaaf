let form = document.querySelector("form");
let modal = document.querySelector(".modal")
modal.classList.add("close");



let userId = {};

function handleForm (event) {
    event.preventDefault();
    userId.name = form.elements.name.value;
    userId.email = form.elements.mail.value;
    userId.loveToWatch = form.elements.loveToWatch.value;
    userId.color = form.elements.color.value;
    userId.rating = form.elements.range.value;
    userId.genre = form.elements.drone.value;
    userId.terms = form.elements.terms.checked;
     

    form.classList.add("close");
    modal.classList.remove("close");
    
    let userName = document.querySelector(".user-name");
    userName.innerText = `Hello ${userId.name}`;
    let email = document.querySelector(".user-mail");
    email.innerText = `Email: ${userId.email}`
    
    let youLove = document.querySelector(".user-love");
    youLove.innerText = `You Love: ${userId.loveToWatch}`
    
    let color = document.querySelector(".user-color");
    color.innerText = `Color: ${userId.color}`
    
    let rating = document.querySelector(".user-rating");
    rating.innerText = `Rating: ${userId.rating}`
    
    let bookGenre = document.querySelector(".user-genre");
    bookGenre.innerText = `Book Genre: ${userId.genre}`
    
    modal.append(userName, email, youLove, color, rating, bookGenre, bookGenre);
    
    
    
    if (userId.terms === true) {
        let tAndC = document.querySelector(".terms");
        bookGenre.innerText = "** You agree to Terms and Conditions **";
    }
        
    return;

}

form.addEventListener("submit", handleForm);




let closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
    modal.classList.add("close");
    form.classList.remove("close");
})