const hamburger = document.querySelector('.navbar__container-hamburguer');
const navLinks = document.querySelector('.navbar__container-links');
const links = document.querySelector('.navbar__container-links li');
const line = document.querySelector('.line');

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  line.classList.toggle("color");
});