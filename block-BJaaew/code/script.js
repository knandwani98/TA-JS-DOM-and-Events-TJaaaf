function elements () {
    let tags = document.querySelector(".tags");
let root = document.querySelector(".root");
let searchBar = document.querySelector(".search_bar");

let allHouse = [];
let allPeople = [];


got.houses.forEach(house => {
    house.people.forEach(person => allPeople.push(person));
});

function createTags (data = got) {
    got.houses.map((house,index) => {
        allHouse.push(house);
        // <li><button>STARKS</button></li>
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.classList.add("btn")
        button.setAttribute("data-id", index);
        button.innerText = house.name.toUpperCase();
        li.append(button);
        tags.append(li);
    });
}

createTags();

function filterByTag (event) {
    let index = event.target.dataset.id;
    // console.log (index);
    let filterPersons = allHouse[index].people;
    createUI(filterPersons);
}

tags.addEventListener("click", filterByTag);



function createUI (data = allPeople) {
    root.innerHTML = "";
    data.forEach((person) => {
    //     <article class="card">
    //     <img src="../assets/game-of-thrones-jon-snow.jpg"alt="">
    //     <h2>John Snow</h2>
    //     <p>Bastard son of Ned Stark</p>
    //     <button class="btn btn2">KNOW MORE!</button>
    //   </article>
    let article = document.createElement("article");
    article.classList.add("card");
    let img = document.createElement("img");
    img.src = person.image;
    img.alt = person.name;
    let h2 = document.createElement("h2");
    h2.innerText = person.name;
    let p = document.createElement("p");
    p.innerText = person.description;
    let button = document.createElement("a");
    button.href = person.wikiLink;
    button.target = "_blank";
    button.innerText = "KNOW MORE!";
    button.classList.add("btn", "btn2");

    article.append(img, h2, p, button);
    root.append(article);}
    )
}

createUI ();

function searchHandle (event) {
    event.preventDefault();
    // console.log(event.target.value);
    let key = event.target.value.toUpperCase();
    let keyPerson =  allPeople.filter(person => person.name.toUpperCase().includes(key));
    createUI(keyPerson);
}

searchBar.addEventListener("keyup", searchHandle);
}

elements();