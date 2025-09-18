var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
}
burger.addEventListener("click", toggleMenu);
