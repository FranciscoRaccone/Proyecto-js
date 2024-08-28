


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
        
        productosFiltrados.forEach(producto => {    //Crear dinámicamente elementos HTML para cada producto, incluyendo su nombre, precio, y un botón para agregar al carrito.
            const productoDiv = document.createElement('div');
            productoDiv.innerHTML = `
                <p>Nombre: ${producto.nombre} - Precio: $${producto.precio}</p>
                <button onclick="addToCart(${producto.id})" class="button_grey" >Agregar al Carrito</button>
            `;
            productList.appendChild(productoDiv);  //Limpiar cualquier contenido previo en el contenedor de productos
        });
    }
    

    renderizarProductos();
});