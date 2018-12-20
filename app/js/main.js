"use strict";
const myBurger = document.getElementById('myBurger');
const muBurgerLine = document.getElementById('myBurgerLine');
const myBurgerNav = document.getElementById('myBurgerNav');

function myNavBurgerToggle() {
  muBurgerLine.classList.toggle('burger__line--active');
  myBurgerNav.classList.toggle('navigation-active');
}

myBurger.addEventListener('click', myNavBurgerToggle);
