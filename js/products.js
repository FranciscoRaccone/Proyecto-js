document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const buscadorInput = document.getElementById('buscador-input');
    if (productList==null) {
        console.error("product list null")
    }
    if (buscadorInput==null) {
        console.error("buscador impt null")
    }
    const productos = [
        { id: 1, nombre: "Azúcar", precio: 1080 },
        { id: 2, nombre: "Yerba", precio: 1200 },
        { id: 3, nombre: "Café", precio: 6000 },
        { id: 4, nombre: "Miel", precio: 1800 },
        { id: 5, nombre: "Harina", precio: 800 },
        { id: 6, nombre: "Pepsi", precio: 2300 },
    ];

    function renderizarProductos(productosFiltrados) { 
        if (productList==null) {
            return;
        } 
        productList.innerHTML = ''; // Limpiar el contenedor
        productosFiltrados.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.innerHTML = `
                <p>Nombre: ${producto.nombre} - Precio: $${producto.precio}</p>
                <button onclick="addToCart(${producto.id})" class="button_grey">Agregar al Carrito</button>
            `;
            productList.appendChild(productoDiv);
        });
    }

    // Función para filtrar productos según la búsqueda
    function filtrarProductos(textoBusqueda) {
        return productos.filter(producto =>
            producto.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
        );
    }

    // Renderizar todos los productos al cargar la página
    renderizarProductos(productos);

    // Event Listener para el campo de búsqueda
    buscadorInput.addEventListener('input', function () {
        const textoBusqueda = buscadorInput.value;
        const productosFiltrados = filtrarProductos(textoBusqueda);
        renderizarProductos(productosFiltrados);
    });

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
