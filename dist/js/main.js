// select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuPage = document.querySelector(".menu-page");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

//set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuPage.classList.add("show");

    navItems.forEach((item) => item.classList.add("show"));

    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuPage.classList.remove("show");

    navItems.forEach((item) => item.classList.remove("show"));

    //set menu state
    showMenu = false;
  }
}
