const burgerMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.hamburger__menu');
const overlay = document.querySelector('.overlay');

burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
});


overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
})

menu.addEventListener('click', (event) => {
    if (event.target.closest('a, img, div')) {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    }
})