let ime = document.querySelector(".ime")
let email = document.querySelector(".email")
let message = document.querySelector(".message")

let posalji_button = document.querySelector(".posalji_button")



posalji_button.addEventListener("click", e => {
    if (ime.value == "" || email.value == "" || message.value == "") {
        alert("Niste uneli potrebne informacije.");
        e.preventDefault();

    }
})