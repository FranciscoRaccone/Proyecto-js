

//Funcion para calcular el precio total en un carrito, aplicando un descuento

/* El programa va a pedir productos y necesita los datos: Nombre, precio y cantidad */

function pedirDatosAlUsuario (){            //Esta funcion es la que va encargarse de pedir los datos de los productos
    let datosUsuario = {                  //Aca voy a crear los objetos
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

    function reductor(total, producto) {                        //Aca tengo la funcion para sumar el precio de los objetos * su cantidad 
        return (producto.precio * producto.cantidad) + total;
    }
    
    let total = productos.reduce(reductor, 0);                 //En esta variable guardo el precio reducido a uno solo para cada objeto


    
    //En esta variable voy a guaradr una funcion para sumar el precio de cada obejto * su cantidad, por cada elemento dentro del array productos
    let cantidadTotalProductos = productos.reduce((total, producto) => {
        return producto.cantidad + total;
    }, 0);
    
    total = aplicarDescuento(total, cantidadTotalProductos);   //Aca le digo a total que use la funcion aplicar descuento al precio total 

    console.log("Productos:", productos);
    alert("Total con descuento: " + total.toFixed(2));

    
}


