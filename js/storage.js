

// Elementos del DOM
let formulario = document.querySelector('#Carro');
let productoInput = document.getElementById('productoInput');
let productoSelect = document.getElementById('productoSelect');

let cantidad = document.getElementById('cantidad');

// Llenar el select con todos los productos inicialmente
function llenarSelect(productosFiltrados = productos) {
    productoSelect.innerHTML = '<option disabled selected>Seleccione un Producto...</option>'; // Limpiar opciones previas y añadir la opción predeterminada
    productosFiltrados.forEach(producto => {
        const option = document.createElement('option');
        option.value = producto.nombre;
        option.textContent = producto.nombre;
        productoSelect.appendChild(option);
    });
}

// Llamar a la función para llenar el select inicialmente
llenarSelect();



// Evento Submit
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    const productoSeleccionado = productos.find(p => p.nombre.toLowerCase() === productoSelect.value.toLowerCase());
    
    if (productoSeleccionado) {
        const productoStorage = productoSeleccionado.nombre;
        const precioStorage = productoSeleccionado.precio;
        const cantidadStorage = cantidad.value;

        localStorage.setItem("producto", productoStorage);
        localStorage.setItem("precio", precioStorage);
        localStorage.setItem("cantidad", cantidadStorage);

        // Mostrar los datos almacenados en el HTML
        precio.value = localStorage.getItem("precio");
        cantidad.value = localStorage.getItem("cantidad");
    } else {
        alert("Producto no encontrado en la lista.");
    }
});

// Mostrar datos guardados al cargar la página
precio.value = localStorage.getItem("precio") || '';
cantidad.value = localStorage.getItem("cantidad") || '';

// Imprimir todos los elementos de localStorage en la consola
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave);
    console.log("Valor: " + localStorage.getItem(clave));
}



