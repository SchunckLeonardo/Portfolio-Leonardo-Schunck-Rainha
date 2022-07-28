// Identificar o Clique

const menuItems = document.querySelectorAll('div.navbar-collapse a')

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {

    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 150;

    scrollToPosition(to);
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth"
    })
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop;
}