const searchForm = document.querySelector('.search-form'),
      searchBtn = document.querySelector('#search-btn'),
      shoppingCart = document.querySelector('.shopping-cart'),
      cartBtn = document.querySelector('#cart-btn'),
      loginForm = document.querySelector('.login-form'),
      loginBtn = document.querySelector('#login-btn'),
      menuBox = document.querySelector('.navbar'),
      menuBtn = document.querySelector('#menu-btn');


      
// remove all active in menu tags before click any in menu tags
function removeActive([...listElement]) {
  listElement.forEach(el => {
    el.classList.remove('active');
  });
}
// remove all active in menu tags when scroll
window.addEventListener('scroll', removeActive([searchForm, shoppingCart, loginForm, menuBox]));


// Show searchForm
searchBtn.onclick = () => {
  removeActive([menuBox, shoppingCart,loginForm]);
  searchForm.classList.toggle('active');
}

// Show shoppingCart
cartBtn.onclick = () => {
  removeActive([menuBox, searchForm, loginForm]);
  shoppingCart.classList.toggle('active');
}

// Show loginForm
loginBtn.onclick = () => {
  removeActive([menuBox, searchForm, shoppingCart]);
  loginForm.classList.toggle('active');
}

// Show menu
menuBtn.onclick = () => {
  removeActive([searchForm, shoppingCart, loginForm]);
  menuBox.classList.toggle('active');
}


/* ============================
  SLIDES
============================== */
const slides = document.querySelectorAll('.home .slide-container .slide'),
      nextBtn = document.getElementById('next-slide'),
      prevBtn = document.getElementById('prev-slide');

let indexSlide = 0;

function nextSlide() {
  slides[indexSlide].classList.remove('active');
  indexSlide = (indexSlide + 1) % slides.length;
  slides[indexSlide].classList.add('active');
}

function prevSlide() {
  slides[indexSlide].classList.remove('active');
  indexSlide = (indexSlide - 1 + slides.length) % slides.length;
  slides[indexSlide].classList.add('active');
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


