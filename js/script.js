document.getElementById("menu-button").addEventListener("click", () => {
    const menu = document.getElementById("hamburger-menu");
    menu.classList.remove("slideOut");
    menu.classList.add("slideIn");
    menu.style.display = "block";
});
document.querySelector("#hamburger-menu .close-button").addEventListener("click", () => {
    const menu = document.getElementById("hamburger-menu");
    menu.classList.remove("slideIn");
    menu.classList.add("slideOut");
    setTimeout(() => {
        menu.style.display = "none";
    }, 500);
});