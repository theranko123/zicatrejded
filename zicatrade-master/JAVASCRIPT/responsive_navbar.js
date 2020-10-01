let pletenaZica_RS = document.querySelector(".pletenaZica_RS")
let panelneOgrade_RS = document.querySelector(".panelneOgrade_RS")
let zateznaZica_RS = document.querySelector(".zateznaZica_RS")
let proizvodi_RS = document.querySelector(".proizvodi_RS")

let pletenaZica_links_responsive = document.querySelector(".pletenaZica_links_responsive")
let proizvodi_links_responsive = document.querySelector(".proizvodi_links_responsive")
let panelneOgrade_links_responsive = document.querySelector(".panelneOgrade_links_responsive")
let zateznaZica_links_responsive = document.querySelector(".zateznaZica_links_responsive")
let usluge_links_responsive = document.querySelector(".usluge_links_responsive")

let btn1_down = document.querySelector(".btn1_down")
let btn1_up = document.querySelector(".btn1_up")


let btn2_down = document.querySelector(".btn2_down")
let btn2_up = document.querySelector(".btn2_up")


let btn3_down = document.querySelector(".btn3_down")
let btn3_up = document.querySelector(".btn3_up")


let btn4_down = document.querySelector(".btn4_down")
let btn4_up = document.querySelector(".btn4_up")


let btn5_down = document.querySelector(".btn5_down")
let btn5_up = document.querySelector(".btn5_up")


btn1_up.style.display = "none"
btn2_up.style.display = "none"
btn3_up.style.display = "none"
btn4_up.style.display = "none"
btn5_up.style.display = "none"




btn1_down.addEventListener("click", e => {
    proizvodi_links_responsive.style.display = "block"
    btn1_down.style.display = "none"
    btn1_up.style.display = "flex"
})

btn1_up.addEventListener("click", e => {
    proizvodi_links_responsive.style.display = "none"
    btn1_down.style.display = "flex"
    btn1_up.style.display = "none"
})

btn2_down.addEventListener("click", e => {
    pletenaZica_links_responsive.style.display = "block"
    btn2_down.style.display = "none"
    btn2_up.style.display = "flex"
})

btn2_up.addEventListener("click", e => {
    pletenaZica_links_responsive.style.display = "none"
    btn2_down.style.display = "flex"
    btn2_up.style.display = "none"
})


btn3_down.addEventListener("click", e => {
    panelneOgrade_links_responsive.style.display = "block"
    btn3_down.style.display = "none"
    btn3_up.style.display = "flex"
})

btn3_up.addEventListener("click", e => {
    panelneOgrade_links_responsive.style.display = "none"
    btn3_down.style.display = "flex"
    btn3_up.style.display = "none"
})

btn4_down.addEventListener("click", e => {

    zateznaZica_links_responsive.style.display = "block"
    btn4_down.style.display = "none"
    btn4_up.style.display = "flex"
})

btn4_up.addEventListener("click", e => {

    zateznaZica_links_responsive.style.display = "none"
    btn4_down.style.display = "flex"
    btn4_up.style.display = "none"
})


btn5_down.addEventListener("click", e => {

    usluge_links_responsive.style.display = "block"
    btn5_down.style.display = "none"
    btn5_up.style.display = "flex"
})

btn5_up.addEventListener("click", e => {

    usluge_links_responsive.style.display = "none"
    btn5_down.style.display = "flex"
    btn5_up.style.display = "none"
})


let hamburger = document.querySelector(".hamburger")
let close = document.querySelector(".fa-times")
let responsive_links_container = document.querySelector(".responsive_links_container")

close.style.display = "none"


hamburger.addEventListener("click", e => {

    responsive_links_container.style.display = "block"
    responsive_links_container.classList.add("navbar_animation_open")
    responsive_links_container.classList.remove("navbar_animation_close")
    close.style.display = "flex"
    hamburger.style.display = "none"
})



close.addEventListener("click", e => {
    // responsive_links_container.classList.remove("navbar_animation_open")
    // responsive_links_container.classList.add("navbar_animation_close")
    responsive_links_container.style.display = "none"
    close.style.display = "none"
    hamburger.style.display = "flex"
})



