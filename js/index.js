const links = document.querySelectorAll("nav li");

links.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove("active");
    });
});