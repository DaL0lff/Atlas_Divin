var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
}
burger.addEventListener("click", toggleMenu);

// Sélection du bouton toggle dark mode
const toggleDarkModeBtn = document.querySelector(".dark-mode-btn");

// Toggle entre dark et light mode
toggleDarkModeBtn.addEventListener("click", function () {
  console.log("Dark mode toggled");
  const html = document.querySelector("html");
  const currentTheme = html.getAttribute("data-theme");

  // Si le thème actuel est dark, on passe à light, sinon on passe à dark
  if (currentTheme === "dark") {
    console.log("Switching to light mode");
    html.setAttribute("data-theme", "light");
  } else {
    console.log("Switching to dark mode");
    html.setAttribute("data-theme", "dark");
  }
});
