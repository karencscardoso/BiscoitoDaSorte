const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOpenCookie = document.querySelector('#btn-open-cookie')
const btnTryCookie = document.querySelector('#btn-try-cookie')

function toogleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function vibrate() {
    btnOpenCookie.classList.toggle("vibrate-1")
}

function scale() {
    screen2.classList.add("animate")
}

btnOpenCookie.addEventListener("mouseover", vibrate)
btnOpenCookie.addEventListener("mouseout", vibrate)

btnOpenCookie.addEventListener("click", toogleScreen)
btnTryCookie.addEventListener("click", toogleScreen)
