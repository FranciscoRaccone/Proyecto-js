

// Evento Submit
let formulario = document.querySelector('#Carro');
let nombre = document.getElementById('producto');
let precio = document.getElementById('precio');
let cantidad = document.getElementById('cantidad');

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    const productoStorage = nombre.value;
    const precioStorage = precio.value;
    const cantidadStorage = cantidad.value;

    localStorage.setItem("producto", productoStorage);
    localStorage.setItem("precio", precioStorage);
    localStorage.setItem("cantidad", cantidadStorage);

    // Mostrar los datos almacenados en el HTML
    nombre.innerHTML = localStorage.getItem("producto");
    precio.innerHTML = localStorage.getItem("precio");
    cantidad.innerHTML = localStorage.getItem("cantidad");
});

// Mostrar datos guardados al cargar la página
nombre.innerHTML = localStorage.getItem("producto") || '';
precio.innerHTML = localStorage.getItem("precio") || '';
cantidad.innerHTML = localStorage.getItem("cantidad") || '';

// Imprimir todos los elementos de localStorage en la consola
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave);
    console.log("Valor: " + localStorage.getItem(clave));
}




//Borrar el storage
const clearLS = document.getElementById("clearLS");

clearLS.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    
    Swal.fire({
        title: "Estas seguro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borremoslo!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Archivo borrado!",
                icon: "success"
            });            
        }
        location.reload();
    });
});