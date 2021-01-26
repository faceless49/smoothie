"use strict";

// * ====== Hamburger active class toggle

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__navigation"),
    menuItem = document.querySelectorAll(".menu__link"),
    hamburger = document.querySelector(".header__hamburger"),
    lines = document.querySelectorAll(".header__hamburger-item");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("header__hamburger--active");
    menu.classList.toggle("header__navigation--active");
    menuItem.forEach((menuItem) => {
      menuItem.classList.toggle("header__hamburger--active-item");
    });
    lines.forEach((lines) => {
      lines.classList.toggle("header__hamburger--active-item");
    });
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("header__hamburger--active");
      menu.classList.toggle("header__navigation--active");
      lines.forEach((lines) => {
        lines.classList.toggle("header__hamburger--active-item");
      });
    });
  });
});

// * ====== Cart count

let buyButtons = document.querySelectorAll(".btn--white");

let cart_count = document.getElementById("cart_count");

function addToCart() {
  cart_count.innerText = Number(cart_count.innerText) + 1;
}

for (let i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener("click", addToCart);
}




// * JS Scroll

let anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    let blockId = anchor.getAttribute("href");
    document.querySelector(blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// * Smooth scroll btn top


let goTopBtn = document.querySelector('.gotop');



/* window.scroll(function(){
    if (window.scrollTop > 100) {
        goTopBtn.fadeIn();
    } else {
        goTopBtn.fadeOut();
    }
})
 */

goTopBtn.onclick = function() {
    window.scrollTo(pageXOffset, 0);
    // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
  };

  window.addEventListener('scroll', function() {
    goTopBtn.hidden = (pageYOffset < document.documentElement.clientHeight);
  });

// document.onload = (function() {
//     window.scroll(function() {
//         if (window.scrollTop() > 1600) {
//             goTopBtn.fadeIn();
//         } else {
//             goTopBtn.fadeOut();
//         }
//     });
// })




