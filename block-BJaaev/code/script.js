let input = document.querySelector("input[type='text']");

let root = document.querySelector(".root");
let footer = root.nextElementSibling;


let allTodos = JSON.parse(localStorage.getItem("todos")) || [];


function createUI () {
    allTodos.forEach((todo, index) => {
        let li = document.createElement("li");
        li.classList.add("flex");
        let div = document.createElement("div");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.classList.add("checkbox");
        input.name = "";
        input.checked = todo.isDone;
        input.setAttribute("data-id", index);


        function toggleCheckbox (event) {
            let id = event.target.dataset.id;
            
            allTodos[id].isDone = !allTodos[id].isDone;

            localStorage.setItem("todos", JSON.stringify(allTodos));

            createFooter();
        }


        input.addEventListener("input", toggleCheckbox);

        let label = document.createElement("label");
        label.for = index;
        label.innerText = todo.todo;
        div.append(input, label);
        let span = document.createElement("span");
        span.setAttribute("data-id", index);
        span.innerText = "❌";


        function clickDelete(event) {
            root.innerHTML = "";
            let id = event.target.dataset.id;
            allTodos.splice(id, 1);

            localStorage.setItem("todos", JSON.stringify(allTodos));

            createUI();
            createFooter();
        }        

        span.addEventListener("click", clickDelete);

        li.append(div, span);
        root.append(li);

        localStorage.setItem("todos", JSON.stringify(allTodos));

        createFooter();
    })
}

createUI();


function createFooter () {
    footer.innerHTML = "";
    footer.className = "";
    
    let itemLeft = allTodos.length;
    allTodos.forEach((todo) => {
        if (todo.isDone === true) {
            itemLeft = itemLeft - 1;
        }
    })
    
    if (allTodos.length >= 1) {

        footer.classList.add("flex", "list");
        let span = document.createElement("span");
        span.innerText = `${itemLeft} item left`;
        let div = document.createElement("div");
        div.classList.add("flex");
        let spanAll = document.createElement("span");
        spanAll.classList.add("selected");
        spanAll.innerText = "All";

        let spanActive = document.createElement("span");
        spanActive.innerText = "Active";

        let spanCompleted = document.createElement("span");
        spanCompleted.innerText = "Completed";
        div.append(spanAll, spanActive, spanCompleted);

        footer.append(span, div);
    }    
}

createFooter();

function keyEnter (event) {
    root.innerHTML = "";
    event.preventDefault();
    if (event.keyCode === 13 && event.target.value != "") {
        allTodos.push({
            todo: event.target.value,
            isDone: false,
        });
        event.target.value = "";

        localStorage.setItem("todos", JSON.stringify(allTodos));
    }
    createUI();

}

input.addEventListener("keyup", keyEnter);