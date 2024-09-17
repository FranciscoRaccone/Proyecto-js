const cardsProd = document.getElementById("cards");

const peticionA = async () => {
    try {
        // Muestra un mensaje de carga mientras se obtienen los datos
        cardsProd.innerHTML = '<p>Cargando productos...</p>';

        // Realizamos la petición al archivo JSON
        const respuesta = await fetch("/products.json");
        
        // Verificamos si la respuesta es correcta
        if (!respuesta.ok) throw new Error('Error al cargar los productos');

        // Convertimos la respuesta a formato JSON
        const data = await respuesta.json();

        // Limpiamos el contenido de 'cardsProd' antes de mostrar los productos
        cardsProd.innerHTML = '';

        // Recorremos los productos y generamos las tarjetas
        data.forEach(item => {
            const card = document.createElement("div");
            const buttonDisabled = item.stock === 0 ? 'disabled' : '';
            
            card.innerHTML = `
                <div class="card" style="width: 18rem; height: 32rem;">
                    <img class="card-img-top" src=${item.imagen} alt=${item.nombre} />
                    <div class="card-body">
                        <h5 class="card-title">${item.nombre}</h5>
                        <p class="card-text">Descripción: ${item.descripcion}</p>
                        <p class="card-text">Precio: $${item.precio}.-</p>
                        <p class="card-text">Stock: ${item.stock}</p>
                        <a href="#" class="btn btn-success" ${buttonDisabled}>${item.stock > 0 ? 'Comprar' : 'Sin stock'}</a>
                    </div>
                </div>
            `;
            
            cardsProd.appendChild(card);
        });
    } catch (error) {
        console.error(error);
        // Mostramos un mensaje de error en caso de que ocurra un problema
        cardsProd.innerHTML = '<p>Error al cargar los productos.</p>';
    }
};

// Llamamos a la función para cargar los productos cuando se carga la página
peticionA();