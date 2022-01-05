const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const password = document.getElementById("password")

const error1 = document.getElementById("error1")
const error2 = document.getElementById("error2")
const error3 = document.getElementById("error3")
const error4 = document.getElementById("error4")

const btn = document.getElementById("submit")

const popup = document.querySelector(".popup")

btn.addEventListener("click", function() {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    const errorShown = (error, input) => {
        error.style.opacity = "1"
        input.classList.add("active")
        input.placeholder = ""  
    }

    const errorHidden = (error, input) => {
        error.style.opacity = "0"
        input.classList.remove("active")
    }

    const getError = (error, input) => input.value === "" ? errorShown(error, input) : errorHidden(error, input)

    const getErrorEmail = (error, input) => !regex.test(email.value) ? errorShown(error, input) : errorHidden(error, input)

    getError(error1, fname)
    getError(error2, lname)    
    getErrorEmail(error3, email)
    getError(error4, password)

    fname.value && lname.value && regex.test(email.value) && password.value ? popup.style.opacity = "1" : popup.style.opacity = "0"

})
