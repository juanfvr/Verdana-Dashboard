const navButton = document.querySelector("#nav-button");
const navHamburger = document.querySelector("#navbar-hamburger");

navButton.addEventListener("click", (event) => {
    event.preventDefault();
    navHamburger.classList.toggle('hidden')
})