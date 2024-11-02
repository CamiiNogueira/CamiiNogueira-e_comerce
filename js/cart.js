let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para cargar los productos desde localStorage y mostrarlos en la tabla
function cargarCarrito() {
    console.log("Ejecutando cargarCarrito...");
    let tabla = document.getElementById('cart-items');

    // Limpiar la tabla antes de agregar los productos
    tabla.innerHTML = '';

    carrito.forEach(producto => {
        let fila = `
            <tr>
                <td><img src="${producto.imagen}" alt="${producto.nombre}" class="product-img"></td>
                <td>${producto.nombre}</td>
                <td>${producto.moneda} ${producto.precio}</td>
                <td>
                    <div class="quantity-control">
                        <button class="quantity-btn">-</button>
                        <input type="text" value="${producto.cantidad}" id="quantity-${producto.id}">
                        <button class="quantity-btn">+</button>
                    </div>
                </td>
                <td class="subtotal">${producto.moneda} ${producto.precio * producto.cantidad}</td>
                <td><button class="delete-btn"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg></button></td>
            </tr>
        `;
        tabla.innerHTML += fila;
    });
    calcularTotal();
}

// Cargar los productos al cargar la página
window.onload = function() {
    cargarCarrito();
    document.querySelectorAll('input[name="opcion"]').forEach((input) => {
        input.addEventListener('change', calcularTotal);
    });
};


function calcularTotal(){
    if (document.getElementById('pesos').checked) {
        let total = 0;
        carrito.forEach(producto => {
            let precio = producto.precio;
            if (producto.moneda != 'UYU'){
                precio *= 41;
            }
            let subtotal = precio * producto.cantidad;
            total += subtotal;
        });
        document.getElementById('total').value = 'UYU ' + total;
        document.getElementById('subtotal').value = 'UYU ' + total;
    }
    else{
        document.getElementById('dolares').checked = true;
        let total = 0;
        carrito.forEach(producto => {
            let precio = producto.precio;
            if (producto.moneda != 'USD'){
                precio *= 0.02;
            }
            let subtotal = precio * producto.cantidad;
            total += subtotal;
        });
        document.getElementById('total').value = 'USD ' + total;
        document.getElementById('subtotal').value = 'USD ' + total;
    }
};