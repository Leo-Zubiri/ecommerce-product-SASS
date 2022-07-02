/* Menu responsive --------------------------------------------------- */

const menu = document.querySelector('.menu');
const btnHamburguer = document.querySelector('.hamburger');
const btnMenuClose = document.querySelector('#btnMenuClose');

btnHamburguer.addEventListener('click', onHamburgerClick);
btnMenuClose.addEventListener('click', onBtnMenuCloseClick);

function onHamburgerClick(){
    menu.classList.remove('hidden')
}

function onBtnMenuCloseClick(){
    menu.classList.add('hidden');
}


/* Carrito compras show-hide --------------------------------------------------- */
const cart = document.querySelector('.cart');
const btnCart = document.querySelector('.btnCart');

btnCart.addEventListener('click', openCart);

function openCart(){
    cart.classList.toggle('hidden');
}