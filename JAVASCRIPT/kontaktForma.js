let ime = document.querySelector("#ime")
let email = document.querySelector("#email")
let poruka = document.querySelector("#poruka")

let posaljiButton = document.querySelector(".posalji_button");



posaljiButton.addEventListener('click', e => {
    console.log("Ime : " + ime.value)
    console.log("Email : " + email.value)
    console.log("Poruka : " + poruka.value)
})