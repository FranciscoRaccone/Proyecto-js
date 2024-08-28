const productos = [
    { id: 1, nombre: "Azucar", precio: 1080 },
    { id: 2, nombre: "Yerba", precio: 1200 },
    { id: 3, nombre: "Café", precio: 6000 },
    { id: 4, nombre: "Miel", precio: 1800 },
    { id: 5, nombre: "Harina", precio: 800 },
    { id: 6, nombre: "Pepsi", precio: 2300 },
]

let carrito = [];

console.log(productos);
function addToCart(productoID) {    //Funcion para adicionar elementos al array
    const product = productos.find(p => p.id === productoID);
    //Agrega elementos al array
    carrito.push({
        id: product.id,
        nombre: product.nombre,
        precio: product.precio
    })
    //Sweet alert
    Swal.fire({                     
        position: "top-end",
        icon: "success",
        title: `El ${product.nombre} se agrego al Carrito.!`,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });
    //Transformo en string el producto
    localStorage.setItem("Cart", JSON.stringify(carrito));
}



document.addEventListener("DOMContentLoaded", function () {
    function renderizarProductos(productosFiltrados = productos) {
        const productList = document.getElementById('product-list');   //Insertar estos elementos en el DOM bajo el contenedor
        productList.innerHTML = '';
        productosFiltrados.forEach(producto => {    //Crear dinámicamente elementos HTML para cada producto, incluyendo su nombre, precio, y un botón para agregar al carrito.
            const productoDiv = document.createElement('div');
            productoDiv.innerHTML = `
                <p>Nombre: ${producto.nombre} - Precio: $${producto.precio}</p>
                <button onclick="addToCart(${producto.id})" class="button_grey" >Agregar al Carrito</button>
            `;
            productList.appendChild(productoDiv);  //Limpiar cualquier contenido previo en el contenedor de productos
        });
    }
    

    //Buscador
    const buscadorInput = document.getElementById('buscador-input');
    buscadorInput.addEventListener('input', function () {
        const textoBusqueda = buscadorInput.value.toLowerCase();
        const productosFiltrados = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(textoBusqueda)
        );
        renderizarProductos(productosFiltrados);
    });

    renderizarProductos();
});