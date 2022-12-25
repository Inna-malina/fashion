let burgerClose = document.querySelector('.burger-close');
let burger = document.querySelector('.burger-menu');
let burgerMenu = document.querySelector('nav');
let burgerList = document.querySelector('.nav-list__wrapper');

burger.addEventListener('click', function () {
  console.log('qwerqwerqwer');
  burgerMenu.classList.remove('menu-disactive');
  burgerMenu.classList.add('menu-active');

  burger.classList.remove('burger-active');
  burger.classList.add('burger-disactive');

  burgerClose.classList.remove('close-disactive');
  burgerClose.classList.add('close-active');
});

burgerClose.addEventListener('click', function () {
  burgerMenu.classList.remove('menu-active');
  burgerMenu.classList.add('menu-disactive');

  burger.classList.remove('burger-disactive');
  burger.classList.add('burger-active');

  burgerClose.classList.remove('close-active');
  burgerClose.classList.add('close-disactive');
});

let mainBunner = document.querySelector('.main-bunner');
let mainBunnerHeight = window.getComputedStyle(mainBunner).height;

window.addEventListener('scroll', function () {
  if (window.pageYOffset >= mainBunner.scrollHeight) {
    burger.classList.add('pink');
    burgerClose.classList.add('pink');
    burgerList.classList.add('shadow');
  }
  else{
    burger.classList.remove('pink');
    burgerClose.classList.remove('pink');
    burgerList.classList.remove('shadow');
  }
});