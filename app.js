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

    if (fname.value === "") {
        error1.style.opacity = "1"
        fname.classList.add("active") 
        fname.placeholder = ""
    } else {
        error1.style.opacity = "0"
        fname.classList.remove("active") 
    }

    if (lname.value === "") {
        error2.style.opacity = "1"
        lname.classList.add("active") 
        lname.placeholder = ""
    } else {
        error2.style.opacity = "0"
        lname.classList.remove("active") 

    }


    if (!regex.test(email.value)) {
        error3.style.opacity = "1"
        email.classList.add("active") 
        email.placeholder = ""
        email.value = ""
    } else {
        error3.style.opacity = "0"
        email.classList.remove("active") 

    }

    if (password.value === "") {
        error4.style.opacity = "1"
        password.classList.add("active") 
        password.placeholder = ""

    } else {
        error4.style.opacity = "0"
        password.classList.remove("active") 
    }

    if (fname.value && lname.value && email.value && password.value) {
        document.querySelector(".popup").style.opacity = "1" 
    }
    
})

