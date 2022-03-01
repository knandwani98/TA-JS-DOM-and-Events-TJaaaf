let root = document.querySelector(".root");
let input = document.querySelector(`input[type="text"]`);

let allMovies = [];

function clickEnter (event) {

    event.preventDefault();
    if (event.keyCode === 13){
        allMovies.push({            
            name : event.target.value,
            watched : false,
        });
        movieList();
        event.target.value = "";
    }
    return;
}
input.addEventListener("keyup", clickEnter)

function movieList () {
    root.innerHTML = "";
    allMovies.forEach((movie,i) => {
        let li = document.createElement("li");
        li.classList.add("flex");
        let input = document.createElement("input");
        input.type = "checkbox"
        input.id = i;
        input.checked = movie.watched;
        input.classList.add("checkbox");
        input.addEventListener("click", (event) => {
            let id = event.target.id;
            allMovies[id].watched = !allMovies[id].watched;
        })

        let label = document.createElement("label");
        label.for = i;
        label.innerText = movie.name;
        let span = document.createElement("span");
        span.innerText = "X"
        
        span.setAttribute("data-id", i);
        span.addEventListener("click", (event) => {
            let id = event.target.dataset.id;
            allMovies.splice(id, 1);
            movieList();
        })

        li.append(input,label,span);
        root.append(li);
    });
}

movieList();

// function formHandle(event) {
    //     event.preventDefault();
//     function createLayout () {
//         //     <div class="flex movie">

//         //     <div class="flex">
//         let flex = document.createElement("div");
//         flex.classList.add("flex");
        
//         //       <input type="checkbox" class="checkbox" id="movie1" >
//         let input = document.createElement("input");
//         input.type = "checkbox";
//         input.classList.add("checkbox");
//         input.setAttribute("id", "");
        
//         //       <label for="movie1">Forest Gump</label>
//         let label = document.createElement("label");
//         label.for = "";
//         label.innerText = event.target.elements.movie.value;
//         //     </div>
//         //     <i class="lni lni-close"></i>
//         let closespan = document.createElement("i");
//         closespan.classList.add("lni", "lni-close");
//         //   </div>
//         flex.append(input,label);
//         movie.append(flex, closespan);
//         form.append(movie);

//         function clickHandle () {
//             movie.innerHTML = "";
//             movie.className = "";
//         }

//         closespan.addEventListener("click", clickHandle);

//         return;
//         }
    
//     createLayout();
//     return;
// }

// form.addEventListener("submit", formHandle);