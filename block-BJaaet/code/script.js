let form = document.querySelector("form");
let initialValue = 0;


function formHandle(event) {
    event.preventDefault();
    function createLayout () {
        //     <div class="flex movie">
        let movie = document.createElement("div");
        movie.classList.add("flex", "movie");
    
        //     <div class="flex">
        let flex = document.createElement("div");
        flex.classList.add("flex");
        
        //       <input type="checkbox" class="checkbox" id="movie1" >
        let input = document.createElement("input");
        input.type = "checkbox";
        input.classList.add("checkbox");
        input.setAttribute("id", "");
        
        //       <label for="movie1">Forest Gump</label>
        let label = document.createElement("label");
        label.for = "";
        label.innerText = event.target.elements.movie.value;
        //     </div>
        //     <i class="lni lni-close"></i>
        let closeIcon = document.createElement("i");
        closeIcon.classList.add("lni", "lni-close");
        //   </div>
        flex.append(input,label);
        movie.append(flex, closeIcon);
        form.append(movie);

        function clickHandle () {
            movie.innerHTML = "";
            movie.className = "";
        }

        closeIcon.addEventListener("click", clickHandle);

        return;
        }
    
    createLayout();
    return;
}

form.addEventListener("submit", formHandle);