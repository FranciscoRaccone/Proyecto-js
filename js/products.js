// products.js

document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const productos = [
        { id: 1, nombre: "Azúcar", precio: 1080 },
        { id: 2, nombre: "Yerba", precio: 1200 },
        { id: 3, nombre: "Café", precio: 6000 },
        { id: 4, nombre: "Miel", precio: 1800 },
        { id: 5, nombre: "Harina", precio: 800 },
        { id: 6, nombre: "Pepsi", precio: 2300 },
    ];

    function renderizarProductos() {
        productList.innerHTML = ''; // Limpiar el contenedor
        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.innerHTML = `
                <p>Nombre: ${producto.nombre} - Precio: $${producto.precio}</p>
                <button onclick="addToCart(${producto.id})" class="button_grey">Agregar al Carrito</button>
            `;
            productList.appendChild(productoDiv);
        });
    }

    renderizarProductos();

    // Definir addToCart para agregar productos al carrito
    window.addToCart = function(productId) {
        const producto = productos.find(p => p.id === productId);
        if (producto) {
            const carrito = JSON.parse(localStorage.getItem('Cart')) || [];
            carrito.push({
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: 1 // Puedes ajustar la cantidad según tus necesidades
            });
            localStorage.setItem('Cart', JSON.stringify(carrito));
        }
    };
});