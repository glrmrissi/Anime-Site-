let aDrop = document.querySelector('.animes-open')
let dropShow = document.querySelector('.menuDropShow')
let linksDrop = document.querySelector('.nav-links')

function menuDrop() {
    if (dropShow.classList.contains('show')){
        dropShow.classList.remove('show')
    } else {
        dropShow.classList.add('show')
    }
}

function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "https://img.icons8.com/ios-filled/50/menu-rounded.png"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "https://img.icons8.com/ios-filled/50/000000/delete-sign--v1.png"
    }
}

const chk = document.getElementById('chk')
const navItem = document.getElementById('nav-item')
var backgroundElement = document.querySelector('.background');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    backgroundElement.classList.toggle('dark')
    navItem.classList.toggle('dark');
})

function toggleDarkMode() {
    var labelElement = document.querySelector('.label')
    var ballElement = document.querySelector('.ball');
    var backgroundElement = document.querySelector('.background');
    backgroundElement.classList.toggle('dark')
    labelElement.classList.toggle('dark')
    ballElement.classList.toggle('dark')
}


let btn = document.getElementById('btnTop')

btn.addEventListener("click", function(){
    window.scrollTo(0, 0)
})


function ocultar() {
    if (window.scrollY < 10) {
        btn.style.visibility = "hidden";
        btn.style.opacity = "0";
    } else {
        btn.style.visibility = "visible";
        btn.style.opacity = "1";
    }
}

window.addEventListener("scroll", ocultar)
