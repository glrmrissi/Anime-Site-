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

chk.addEventListener('change', () => {

    document.body.classList.toggle('dark');
    navItem.classList.toggle('dark');
})

let btn = document.getElementById('btnTop')

btn.addEventListener("click", function(){
    window.scrollTo(0, 0)
})


function ocultar() {
    if (window.scrollY < 10) {
        btn.style.display = "none"
    } else {
        btn.style.display = "flex"
    }
}

btn.style.transform = "opacity 1s ease-in-out"

window.addEventListener("scroll", ocultar)