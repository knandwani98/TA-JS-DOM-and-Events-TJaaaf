let userId = {}, errorMsg = {};

let form = document.querySelector("form");

function clickHandle (event) {
    event.preventDefault()
    let elements = event.target.elements;

    const username = elements.username.value;
    const name = elements.name.value;
    const email = elements.email.value;
    const phone = elements.phone.value;
    const password = elements.password.value;
    const cnfrmPswrd = elements.cnfrmPswrd.value;

    function displayError (name) {
        form.elements[name].nextElementSibling.innerText = errorMsg[name];
        form.elements[name].parentElement.classList.add("error");
        return;
    }
    function displaySuccess(name) {
        form.elements[name].nextElementSibling.innerText = "";
        errorMsg[name] = "";
        form.elements[name].parentElement.classList.remove("error");
        form.elements[name].parentElement.classList.add("success");
        return;        
    }



// Username can't be less than 4 characters
if (username.length <= 4) {
    errorMsg.username = "Username can't be less than 4 characters";
    displayError("username");
} else {
    displaySuccess("username");
}

// Name can't be numbers
if (!isNaN(name)){
    errorMsg.name = "Name can't be numbers";
    displayError("name");
}
else{
    displaySuccess("name");
}

// Email must contain the symbol @
// Email must be at least 6 characters

if (!email.includes("@")){
    errorMsg.email = "Email must contain @ symbol";
    displayError("email");
} else if (email.length < 6){
    errorMsg.email = "Email must be at least 6 characters";
    displayError("email");
} else{
    displaySuccess("email");
}

// Phone numbers can only be a number
// Length of phone number can't be less than 7
if (isNaN(phone)){
    errorMsg.phone = "Phone numbers can only be a number";
    displayError("phone");
} else if (phone.length < 7) {
    errorMsg.phone = "Length of phone number can't be less than 7";
    displayError("phone");    
}
else{
    displaySuccess("phone");
}

// Password and confirm password must be same.
if (password !== cnfrmPswrd){
    errorMsg.password = "Password and confirm password must be same.";
    errorMsg.cnfrmPswrd = "Password and confirm password must be same.";
    displayError("password");
    displayError("cnfrmPswrd");
}
else{
    displaySuccess("password");
    displaySuccess("cnfrmPswrd");
}

    console.log({username, name, email, phone, password, cnfrmPswrd});
    return;
}

form.addEventListener("submit", clickHandle);

// Messages for error:

// __ can't be less than __ characters (replace __ with field name)
// You can't use number in the name field
// Not a valid email
// Phone number can only contain numbers
// Once the form is valid it should alert User Added Successfully!