// storage.js

const productos = [
    { id: 1, nombre: "Azúcar", precio: 1080 },
    { id: 2, nombre: "Yerba", precio: 1200 },
    { id: 3, nombre: "Café", precio: 6000 },
    { id: 4, nombre: "Miel", precio: 1800 },
    { id: 5, nombre: "Harina", precio: 800 },
    { id: 6, nombre: "Pepsi", precio: 2300 },
];

document.addEventListener('DOMContentLoaded', function() {
    const productoSelect = document.getElementById('productoSelect');
    const formulario = document.querySelector('#Carro');
    const cantidad = document.getElementById('cantidad');

    if (productoSelect && formulario) {
        // Llenar el select con todos los productos
        function llenarSelect() {
            productoSelect.innerHTML = '<option disabled selected>Seleccione un Producto...</option>';
            productos.forEach(producto => {
                const option = document.createElement('option');
                option.value = producto.nombre;
                option.textContent = producto.nombre;
                productoSelect.appendChild(option);
            });
        }

        llenarSelect();

        // Evento Submit
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();

            const productoSeleccionado = productos.find(p => p.nombre.toLowerCase() === productoSelect.value.toLowerCase());
            
            if (productoSeleccionado) {
                const productoStorage = productoSeleccionado.nombre;
                const precioStorage = productoSeleccionado.precio;
                const cantidadStorage = cantidad.value;

                const carrito = JSON.parse(localStorage.getItem("Cart")) || [];
                carrito.push({
                    nombre: productoStorage,
                    precio: precioStorage,
                    cantidad: cantidadStorage
                });

                localStorage.setItem("Cart", JSON.stringify(carrito));

                // Limpiar campos del formulario
                productoSelect.value = '';
                cantidad.value = '';
            } 
        });
    } 
});
