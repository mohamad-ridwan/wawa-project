function scrollNavbar(e) {
    const navbar = document.getElementsByClassName('navbar')
    const currentScrollY = Math.floor(window.scrollY)
    if (currentScrollY > 100) {
        // console.log(navbar)
    } else {
        // console.log(navbar)
    }
}

window.addEventListener('scroll', scrollNavbar, false)