'use strict'

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__navigation'),
    menuItem = document.querySelectorAll('.menu__link'),
    hamburger = document.querySelector('.header__hamburger'),
    lines = document.querySelectorAll('.header__hamburger-item');
    

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger--active');
        menu.classList.toggle('header__navigation--active');
        menuItem.forEach((menuItem) => {
        menuItem.classList.toggle('header__hamburger--active-item');
        });
        lines.forEach((lines) => {
            lines.classList.toggle('header__hamburger--active-item');
        });
    })

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger--active');
            menu.classList.toggle('header__navigation--active');
            lines.forEach((lines) => {
            lines.classList.toggle('header__hamburger--active-item');
            })
        })
    })
})





let buyButtons = document.querySelectorAll('.btn--white');

let cart_count = document.getElementById('cart_count');

function addToCart() {
    cart_count.innerText = Number(cart_count.innerText) + 1
};

// buyButtons[0].addEventListener

for(let i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener('click', addToCart)
};




// * JS Scroll 

    let anchors = document.querySelectorAll('a[href*="#"]');

/*     for(let i=0; i< anchors.length; i++) {
        anchors[i].addEventListener
    } */

    for(let anchor of anchors) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault()
            let blockId = anchor.getAttribute('href')
            document.querySelector(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }








