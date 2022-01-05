const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const password = document.getElementById("password")

const error1 = document.getElementById("error1")
const error2 = document.getElementById("error2")
const error3 = document.getElementById("error3")
const error4 = document.getElementById("error4")

const btn = document.getElementById("submit")

btn.addEventListener("click", function() {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    const getErrorTrue = (error, input) => {
        error.style.opacity = "1"
        input.classList.add("active")
        input.placeholder = ""
    }

    const getErrorFalse = (error, input) => {
        error.style.opacity = "0"
        input.classList.remove("active")
    }

    if (fname.value === "") {
        getErrorTrue(error1, fname)
    } else {
        getErrorFalse(error1, fname)
    }

    if (lname.value === "") {
        getErrorTrue(error2, lname)
    } else {
        getErrorFalse(error2, lname)
    }        

    if (!regex.test(email.value)) {
        getErrorTrue(error3, email)
    } else {
        getErrorFalse(error3, email)
    }

    if (password.value === "") {
        getErrorTrue(error4, password)
    } else {
        getErrorFalse(error4, password)
    }

    if (fname.value && lname.value && email.value && password.value) {
        document.querySelector(".popup").style.opacity = "1" 
    }
})

console.log("test")