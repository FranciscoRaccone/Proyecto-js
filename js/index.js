//Funcion para calcular el precio total en un carrito, aplicando un descuento

/* El programa va a pedir productos y necesita los datos: Nombre, precio y cantidad */

function pedirDatosAlUsuario (){
    let datosUsuario = {
        nombre: "",
        precio: 0,
        cantidad: 0
    };
    // Validar la cantidad de productos
    do {
        datosUsuario.nombre =prompt ("Ingrese nombre producto");
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



function calcularTotal() {
    
    let productos = [];

    let masProductos = true;  //Comienza mi funcion con el while

    
    while (masProductos){
        let producto = pedirDatosAlUsuario();
        productos.push(producto);

        let respuesta = prompt("¿Quiere agregar otro producto?");
        if (respuesta == "si") {
            masProductos = true;
        } else {
            masProductos = false;
        }
    } 

    let reducer = function (total, producto) {
        return (producto.precio * producto.cantidad)+total
    };
    console.log(productos)
    console.log(productos.reduce(reducer,0))
    



    // Aplicar descuento
    /* let descuento = parseFloat(prompt("Ingresa el descuento (%):"));
    
    if (isNaN(descuento) || descuento < 0) {
        alert("Por favor, ingresa un descuento válido.");
    } else if (descuento > 0) {
        total = total - (total * (descuento / 100));
    }

    alert('El costo total es: ' + total.toFixed(2));  //aca aplico el (toFixed(2) para que el numero sea mas conciso) */
}

// Ejecución del simulador
calcularTotal();