const menuToggle = document.getElementById("menu-toggle");

const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

navMenu.classList.toggle("active");

if (navMenu.classList.contains("active")) {

menuToggle.textContent = "✕";

} else {

menuToggle.textContent = "☰";

}

});

const links = document.querySelectorAll("#nav-menu a");

links.forEach(link => {

link.addEventListener("click", () => {

navMenu.classList.remove("active");

menuToggle.textContent = "☰";

});

});

const elementos = document.querySelectorAll(
".specialty-card, .news-card, .education-item"
);

const observador = new IntersectionObserver((entradas) => {

entradas.forEach(entrada => {

if (entrada.isIntersecting) {

entrada.target.classList.add("visible");

observador.unobserve(entrada.target);

}

});

}, {
threshold: 0.15
});

elementos.forEach(elemento => {

elemento.classList.add("animacion-scroll");

observador.observe(elemento);

});