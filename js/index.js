//Funcion para calcular el precio total en un carrito, palicando un descuento

function calcularTotal() {
    let numeroDeProductos;
    let total = 0;

    // Validar la cantidad de productos
    do {
        numeroDeProductos = parseInt(prompt("Ingresa cantidad de productos:"));
        if (isNaN(numeroDeProductos) || numeroDeProductos <= 0) {
            alert("Por favor ingrese un número de productos válido.");
        }
    } while (isNaN(numeroDeProductos) || numeroDeProductos <= 0);

    // Validar el precio de cada producto
    for (let i = 0; i < numeroDeProductos; i++) {
        let precioProducto;

        do {
            precioProducto = parseFloat(prompt("Ingresa el precio del producto " + (i + 1) + ":"));
            if (isNaN(precioProducto) || precioProducto <= 0) {
                alert("Por favor, ingresa un precio válido.");
            }
        } while (isNaN(precioProducto) || precioProducto <= 0);

        total = total + precioProducto;
    }

    // Aplicar descuento
    let descuento = parseFloat(prompt("Ingresa el descuento (%):"));
    
    if (isNaN(descuento) || descuento < 0) {
        alert("Por favor, ingresa un descuento válido.");
    } else if (descuento > 0) {
        total = total - (total * (descuento / 100));
    }

    alert('El costo total es: ' + total.toFixed(2));  //aca aplico el (toFixed(2) para que el numero sea mas conciso)
}

// Ejecución del simulador
calcularTotal();