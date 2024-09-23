// Barra de navegación

const cuerpo = document.body;
const header = document.querySelector('#header');
const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

const enlaces = [
    {
        link: "index",
        nombre: "Carrito"
    },
    {
        link: "products",
        nombre: "Productos"
    },
];

header.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = "navbar";

for (const link of enlaces) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.link}.html">${link.nombre}</a>`;
    ul.appendChild(li);
}
header.style.backgroundColor = '#c2c2c2';


// Borrar el localStorage y sessionStorage si el botón clearLS existe
document.addEventListener('DOMContentLoaded', () => {
    const clearLS = document.getElementById("clearLS");

    if (clearLS) {
        clearLS.addEventListener("click", () => {
            localStorage.clear();
            sessionStorage.clear();
            console.log("LocalStorage y SessionStorage limpiados");
            // Aquí puedes agregar código para actualizar la UI después de limpiar el carrito si es necesario
        });
    }
});