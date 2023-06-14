let menuMobile = document.querySelector('#menu')
let abrirMenu = document.querySelector('#abrir-menu')
let fecharMenu = document.querySelector('#fechar-menu')
let botoesMenu = document.getElementsByClassName('botao-menu')

abrirMenu.addEventListener('click', show)
fecharMenu.addEventListener('click', hide)

for (let i = 0; i < botoesMenu.length; i++) {
    botoesMenu[i].addEventListener('click', hide)
}

function show() {
    menuMobile.style.display = 'flex'
    menuMobile.style.top = '0'
}

function hide() {
    menuMobile.style.top = '-120%'
}