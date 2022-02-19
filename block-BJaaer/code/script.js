let form = document.querySelector("form");

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
     

    form.parentElement.innerHTML = "";

    function createUserIdLayout () {

        let bg = document.createElement("div");
        bg.className = "banner container";
        let flex = document.createElement("div");
        flex.className = "flex";
        let emptyDiv = document.createElement("div");
        let closeButton = document.createElement("button");
        closeButton.innerText = "Close";
        flex.append(emptyDiv, closeButton);

        document.body.append(bg)
        
        let name = document.createElement("h1");
        name.innerText = `Hello ${userId.name}`;
        let email = document.createElement("h2");
        email.innerText = `Email: ${userId.email}`
        let youLove = document.createElement("h2");
        youLove.innerText = `You Love: ${userId.loveToWatch}`
        let color = document.createElement("h2");
        color.innerText = `Color: ${userId.color}`
        let rating = document.createElement("h2");
        rating.innerText = `Rating: ${userId.rating}`
        let bookGenre = document.createElement("h2");
        bookGenre.innerText = `Book Genre: ${userId.genre}`
        bg.append(flex, name, email, youLove, color, rating, bookGenre, bookGenre);


        // function refreshForm(event) {
            
        // }

        // closeButton.addEventListener("click", refreshForm)

        if (userId.terms === true) {
            let tAndC = document.createElement("h2");
            bookGenre.innerText = "** You agree to Terms and Conditions **";
            bg.append(tAndC);
        }

        {/* <div class="banner container">
        <div class="flex">
          <div></div>
          <button>Close</button>
        </div>
        <h1>Hello Sameer</h1>
        <h2>Email: <span>test@gmail.com</span></h2>
        <h2>You Love : <span>Movies</span></h2>
        <h2>Color: <span>#fffff</span></h2>
        <h2>Rating: <span>#fffff</span></h2>
        <h2>Book Genre: <span>#fffff</span></h2>
        <h2>You agree to Terms and Conditions</h2>
        </div> */}
        return;
    }

    createUserIdLayout ()
}

form.addEventListener("submit", handleForm);



