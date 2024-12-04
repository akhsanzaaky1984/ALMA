let formsignup = document.getElementById('form_signup')
function showformsignup () {
    formsignup.style.display = 'flex'
}
let formsignin = document.getElementById('form_signin')
function showformsignin () {
    formsignin.style.display = 'flex'
}

function closeform () {
    formsignup.style.display = 'none'
    formsignin.style.display = 'none'
    formhappy.style.display = 'none'
    formsad.style.display = 'none'
    formscare.style.display = 'none'
    formshock.style.display = 'none'
    formangry.style.display = 'none'
    formdisgust.style.display = 'none'
}


let formhappy = document.getElementById('happyform')
function showformhappy () {
    formhappy.style.display = 'block'
}

let formsad = document.getElementById('sadform')
function showformsad () {
    formsad.style.display = 'block'
}

let formscare = document.getElementById('scareform')
function showformscare () {
    formscare.style.display = 'block'
}

let formshock = document.getElementById('shockform')
function showformshock () {
    formshock.style.display = 'block'
}

let formangry = document.getElementById('angryform')
function showformangry () {
    formangry.style.display = 'block'
}

let formdisgust = document.getElementById('disgustform')
function showformdisgust () {
    formdisgust.style.display = 'block'
}



