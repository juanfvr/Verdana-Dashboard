const navButton = document.querySelector('#nav-button');
const navSidebar = document.querySelector('#nav-sidebar');


navButton.addEventListener('click', () => {
    navSidebar.classList.remove('hidden')
})

const closeSidebar = document.querySelector('#close-sidebar');

closeSidebar.addEventListener('click', () => {
    navSidebar.classList.add('hidden');
})

function fecharNavbar() {
    navSidebar.classList.add('hidden')
}

const navLinks = document.querySelector('a');

document.querySelector("#navSidebar").addEventListener("click", (event) => {
    if (event.target.classList.contains("nav-item")) {
        fecharNavbar();
    }
});
