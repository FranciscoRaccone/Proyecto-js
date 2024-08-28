//Funcion para calcular el precio total en un carrito, aplicando un descuento

/* El programa va a pedir productos y necesita los datos: Nombre, precio y cantidad */

function pedirDatosAlUsuario() {            //Esta funcion es la que va encargarse de pedir los datos de los productos
    let datosUsuario = {                  //Aca voy a crear los objetos
        nombre: "",
        precio: 0,
        cantidad: 0
    };

    // Validar la cantidad de productos
    do {
        datosUsuario.nombre = prompt("Ingrese nombre producto");
        if (!datosUsuario.nombre || datosUsuario.nombre == "") {
            alert("Por favor ingrese un prodcuto");
        }
    } while (!datosUsuario.nombre || datosUsuario.nombre == "");

    do {
        datosUsuario.precio = parseInt(prompt("Ingrese precio"));
        if (isNaN(datosUsuario.precio) || datosUsuario.precio <= 0) {
            alert("Por favor ingrese un precio de producto válido.");
        }
    } while (isNaN(datosUsuario.precio) || datosUsuario.precio <= 0);

    do {
        datosUsuario.cantidad = parseInt(prompt("Ingrese la cantidad de productos"));
        if (isNaN(datosUsuario.cantidad) || datosUsuario.cantidad <= 0) {
            alert("Por favor ingrese una cantidad de productos válido.");
        }
    } while (isNaN(datosUsuario.cantidad) || datosUsuario.cantidad <= 0);

    return datosUsuario;
}

function aplicarDescuento(total, cantidadProductos) {            //Esta funcion me aplica un descuento al total

    let descuento = 0;

    if (cantidadProductos >= 5) {
        descuento = 25; // 25% de descuento si hay más de 5 productos
    }

    return total - (total * (descuento / 100));
}


function calcularTotal() {

    let productos = [];

    let masProductos = true;  //Comienza mi funcion con el while


    while (masProductos) {
        let producto = pedirDatosAlUsuario();
        productos.push(producto);

        let respuesta = prompt("¿Quiere agregar otro producto? Si/No");
        if (respuesta == "si") {
            masProductos = true;
        } else {
            masProductos = false;
        }
    }

    function acumuladorDePrecio(total, producto) {                        //Aca tengo la funcion para sumar el precio de los objetos * su cantidad 
        return (producto.precio * producto.cantidad) + total;
    }

    let total = productos.reduce(acumuladorDePrecio, 0);                 //En esta variable guardo el precio reducido a uno solo para cada objeto


    //En esta variable voy a usar una funcion (reduce) que recibe una funcion que toma como primer argunemnto lo que devolvio la funcion anterior y como segundo argumento el elemento del array
    function acumuladorDeProductos(cantidad, producto) {
        return producto.cantidad + cantidad;
    }

    let totalDeProductos = productos.reduce(acumuladorDeProductos, 0);

    let totalConDescuento = aplicarDescuento(total, totalDeProductos);   //Aca le digo a total que use la funcion aplicar descuento al precio total 

    // Actualizar el HTML con los resultados
    document.getElementById('nombre').innerHTML = "Productos: " + productos.map(p => p.nombre).join(", ");
    document.getElementById('cantidad').innerHTML = "Cantidad total: " + totalDeProductos;
    document.getElementById('precio').innerHTML = "Precio total: " + total.toFixed(2);
    //Cuando el precio no tiene descuento no se muestra el precio con descuento
    if (total != totalConDescuento) {
        document.getElementById('totalConDescuento').innerHTML = "Total con descuento: " + totalConDescuento.toFixed(2);
    }
}


//Boton para calcular total en carrito
/* const botonCarrito = document.querySelector('#eventoUno');

botonCarrito.addEventListener("click", () => {
    calcularTotal();
}); */


const productos = [
    { id: 1, nombre: "Azucar", precio: 1080 },
    { id: 2, nombre: "Yerba", precio: 1200 },
    { id: 3, nombre: "Café", precio: 6000 },
    { id: 4, nombre: "Miel", precio: 1800 },
    { id: 5, nombre: "Harina", precio: 800 },
    { id: 6, nombre: "Pepsi", precio: 2300 },
]