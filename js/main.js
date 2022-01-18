document.addEventListener('DOMContentLoaded', () => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector("header").style.top = "0";
        } else {
            document.querySelector("header").style.top = "-8rem";
        }
        prevScrollpos = currentScrollPos;
    }

    let navItemsList = document.querySelector('header nav ul')
    let navBtn = document.querySelector('header nav i')
let navItems = document.querySelectorAll('header nav ul li')
    navBtn.className = "fas fa-bars"

    console.log(navItemsList.childNodes[1].childNodes[0])
    navBtn.addEventListener('click', () => {
        if (navItemsList.className != 'active') {
            navItemsList.classList.toggle('active')
            navBtn.classList.replace('fa-bars', 'fa-times')
        } else {
            navItemsList.classList.toggle('active')
            navBtn.classList.replace('fa-times', 'fa-bars')
        }
    })

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', () => {
            if (navItemsList.className != 'active') {
                navItemsList.classList.toggle('active')
                navBtn.classList.replace('fa-bars', 'fa-times')
            } else {
                navItemsList.classList.toggle('active')
                navBtn.classList.replace('fa-times', 'fa-bars')
            }
        })
    }
})
