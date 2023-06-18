let menuMobile = document.querySelector('#menu')
let abrirMenu = document.querySelector('#abrir-menu')
let fecharMenu = document.querySelector('#fechar-menu')
let botoesMenu = document.getElementsByClassName('botao-menu')
const elementos = document.querySelectorAll('[data-anima]')
const animacaoClass = 'animacao'
const JavaScriptOn = 'js'

function animaScroll() {
    const topoPaginaNaJanela = window.scrollY + ((window.innerHeight * 3) / 4); //3/4 da janela
    elementos.forEach(function(elemento){
        elemento.classList.add(JavaScriptOn)
        if(topoPaginaNaJanela > elemento.offsetTop) {
            elemento.classList.add(animacaoClass)
        } else {
            elemento.classList.remove(animacaoClass)
        }
    })
}

if(elementos.length) {
    window.addEventListener('scroll', function() {
        animaScroll();
    })
}

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