// Username can't be less than 4 characters

// Name can't be numbers

// Email must contain the symbol @

// Email must be at least 6 characters

// Phone numbers can only be a number

// Length of phone number can't be less than 7

// Password and confirm password must be same.

let userId = {};

let form = document.querySelector("form");
let nameFooter = document.querySelector(".name-footer")

function clickHandle (event) {
    event.preventDefault()
    userId.username = form.elements.username.value;
    userId.name = form.elements.name.value;

    if(userId.name.split("").some((elm) => typeof elm !== 'number')){
        alert(`You can't use number in the name field`)
    }

    else if (userId.password !== userId.cnfrmPswrd){
        alert(`Password and Confirm Passwords are not same`)
    }
    
    userId.email = form.elements.email.value;
    userId.phone = form.elements.number.value;
    userId.password = form.elements.password.value;
    userId.cnfrmPswrd = form.elements.confirmPassword.value;
    console.log(userId);
    return;
}

form.addEventListener("submit", clickHandle);

// Messages for error:

// __ can't be less than __ characters (replace __ with field name)
// You can't use number in the name field
// Not a valid email
// Phone number can only contain numbers
// Once the form is valid it should alert User Added Successfully!