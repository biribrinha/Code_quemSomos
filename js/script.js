
let menu = document.getElementById("burguer");
let recursos = document.getElementById("recursos");

function mostrarMenu() {
    if (window.getComputedStyle(recursos).display == "none") {

        recursos.style.display = "initial"
        menu.setAttribute("aria-label", "Fechar menu")
        menu.setAttribute("aria-expanded", "true")


    } else {
        recursos.style.display = "none"
        menu.setAttribute("aria-label", "Abrir menu")
        menu.setAttribute("aria-expanded", "false")
    }
};