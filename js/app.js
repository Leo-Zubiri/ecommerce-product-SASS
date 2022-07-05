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

/** Quantity Product */
const btnPlus = document.querySelector('#btnPlus');
const btnMinus = document.querySelector('#btnMinus');
const productCounter = document.querySelector('.counter');

btnPlus.addEventListener('click',productCounterPlus);
btnMinus.addEventListener('click',productCounterMinus);

let counter = 1;

function productCounterPlus(){
    console.log(counter);
    setProductCounter(1);
}

function productCounterMinus(){;
    setProductCounter(-1);
}

function setProductCounter(value){
    
    if(counter+value >0) {
        counter+=value;
        productCounter.innerHTML = counter;
    }
    
}


/** Gallery 4 thumbnails  */

const gallery = document.querySelectorAll('.pic');
const heroImage = document.querySelector('.product-hero');

gallery.forEach(img =>{
    img.addEventListener('click',onThumbClick);
} );

function onThumbClick(e){
    gallery.forEach(img => {
        img.classList.remove('active');
    });

    e.target.parentElement.classList.add('active');

    heroImage.src = e.target.src.replace('-thumbnail','');

}

/** Slider Product Mobile */
const btnNext = document.querySelector('.next');
const btnPrevious = document.querySelector('.previous');

btnNext.addEventListener('click',handleNext);
btnPrevious.addEventListener('click',handlePrevious);

function handleNext(){
    let imageIndex = getCurrentImageIndex();
    imageIndex++;
    if(imageIndex>4) imageIndex = 1;
    setHeroImage(imageIndex);
}

function  handlePrevious(){
    let imageIndex = getCurrentImageIndex();
    imageIndex--;
    if(imageIndex<1) imageIndex = 4;
    setHeroImage(imageIndex);
}

function getCurrentImageIndex(){
    let imageIndex = heroImage.src.split('\\').pop().split('/').pop().replace('.jpg','');
    imageIndex = parseInt(imageIndex.replace('image-product-',''));
    return imageIndex;
}

function setHeroImage(value){
    heroImage.src = `./images/image-product-${value}.jpg`;

    // Sync responsive hero
    gallery.forEach(img => {
        img.classList.remove('active');
    });

    gallery[imageIndex-1].classList.add('active');
}


// Agregar al carrito

let products = 0;

const btnAddCart = document.querySelector('.btn');
const cartCount = document.querySelector('.cart-count');

btnAddCart.addEventListener('click',addToCart);

const productInCart = document.querySelector('.products-in-cart');

function addToCart(){
    products += counter;
    console.log(products);


    const productHTMLElement = `
    <div class="item">

            <img class="product-img" src="./images/image-product-1-thumbnail.jpg" alt="product1">
            <div class="details">
              <div class="product-name">Autumn Limited Edition...</div>
              <div class="price-group">
                <div class="price">$125.00</div>
                <p>x</p>
                <div class="count">${products}</div>
                <div class="total-amount">$${products*125}</div>
              </div>
            </div>

            <img id="btnDelete" src="./images/icon-delete.svg" alt="delete">

          </div>
    `;

    productInCart.innerHTML = productHTMLElement;

    updateCart();
}

function updateCart(){
    updateCartIcon();
}

function updateCartIcon(){
    cartCount.textContent = products;

    if (products == 0){
        cartCount.classList.add('hidden');
    }else{
        cartCount.classList.remove('hidden');
    }
}