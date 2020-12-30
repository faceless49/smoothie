window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__navigation'),
    menuItem = document.querySelectorAll('.menu__link'),
    hamburger = document.querySelector('.header__hamburger'),
    lines = document.querySelectorAll('.header__hamburger-item');
    

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger--active');
        menu.classList.toggle('header__navigation--active');
        lines.forEach((lines) => {
            lines.classList.toggle('header__hamburger--active-item');
        });
    })

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger--active');
            menu.classList.toggle('header__navigation--active');
            lines.classList.toggle('header__hamburger--active-item');
        })
    })
})



/* header__hamburger--active-item */