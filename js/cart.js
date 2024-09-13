
document.addEventListener('DOMContentLoaded', function() {
    const carritoContenido = document.getElementById('carrito-contenido');
    const vaciarCarritoBtn = document.getElementById('vaciarCarrito');
    const finalizarCompraBtn = document.getElementById('finalizarCompra');

    function renderizarCarrito() {
        const carrito = JSON.parse(localStorage.getItem('Cart')) || [];
        carritoContenido.innerHTML = ''; // Limpiar el contenedor

        if (carrito.length === 0) {
            carritoContenido.innerHTML = '<p>El carrito está vacío.</p>';
            return;
        }

        carrito.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.innerHTML = `
                <p>Nombre: ${producto.nombre} - Precio: $${producto.precio} - Cantidad: ${producto.cantidad}</p>
            `;
            carritoContenido.appendChild(productoDiv);
        });
    }

    renderizarCarrito();

    // Evento para vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        localStorage.removeItem('Cart');
        renderizarCarrito();
    });

    // Evento para finalizar compra
    finalizarCompraBtn.addEventListener('click', () => {
        alert('Compra finalizada.');
        localStorage.removeItem('Cart');
        renderizarCarrito();
    });
});