

document.addEventListener('DOMContentLoaded', function() {
    // Cargar carrito desde localStorage
    loadCart();
    renderCart(); // Mostrar los productos en el carrito

    // Botón para vaciar el carrito
    const clearButton = document.getElementById('clearLS');
    clearButton.addEventListener('click', () => {
        clearCart();
        renderCart();  // Actualizar la interfaz luego de vaciar el carrito
    });

    // Evento para calcular total
    const submitForm = document.getElementById('Carro');
    submitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        calculateCartTotal(); // Calcula el total y actualiza la UI
    });
});