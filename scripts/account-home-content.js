var articlesHeadersListElements = document.querySelectorAll(".link-header");


function articleMouseEntered(target) {
    target.classList.add("active");
    console.log(target.parentNode.classList)
}

function articleMouseLeft(target) {
    target.classList.remove("active");
    console.log(target.parentNode.classList)
}
