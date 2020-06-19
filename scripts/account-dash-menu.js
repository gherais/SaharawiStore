var menuLinksUlElement = document.querySelector(".menu-links");

function clickedIconMenu(target) {
    target.classList.toggle("hide");
    menuLinksUlElement.classList.toggle("show");
}
