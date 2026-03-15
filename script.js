var inputname = document.getElementById("name")
var email = document.getElementById("email")
var password = document.getElementById("password")
var submitBtn = document.getElementById("submitBtn")
var nameError = document.getElementById("nameError")
var emailError = document.getElementById("emailError")
var passwordError = document.getElementById("passwordError")

function validateform() {
    //name validation
    if (inputname.value == "") {
        nameError.textContent = "Name cannot be empty"
    }
    else {
        nameError.textContent = ""
    }

    //email validation
    if (email.value.includes("@gmail.com")) {
        emailError.textContent = ""
    }
    else {
        emailError.textContent = "Enter valid email"
    }

    //password validation
    if (password.value.length >= 6) {
        passwordError.textContent = ""
    }
    else {
        passwordError.textContent = "Password must be 6 characters"
    }

    //Enable button only if all th fields has been entered
    if (inputname.value != "" && email.value.includes("@gmail.com") && password.value.length >= 6) {
        submitBtn.disabled = false
    }
    else {
        submitBtn.disabled = true
    }

}


