// Función para cargar los productos desde localStorage y mostrarlos en la tabla
function cargarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let tabla = document.getElementById('cart-items');

    // Limpiar la tabla antes de agregar los productos
    tabla.innerHTML = '';

    if (carrito.length === 0) {
        // Si el carrito está vacío, mostrar mensaje
        tabla.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center;">Aún no tienes productos en el carrito</td>
            </tr>
        `;
    } else {
        carrito.forEach(producto => {
            agregarFilaProducto(producto);
        });
    }
    calcularTotal();
}

// Función para agregar una fila para un producto en la tabla
function agregarFilaProducto(producto) {
    let tabla = document.getElementById('cart-items');

    let fila = document.createElement('tr');
    fila.id = `fila-${producto.id}`;
    fila.innerHTML = `
        <td><img src="${producto.imagen}" alt="${producto.nombre}" class="product-img"></td>
        <td>${producto.nombre}</td>
        <td>${producto.moneda} ${producto.precio}</td>
        <td>
            <div class="input-group me-2">
                <button id="btnMenos-${producto.id}" class="quantity-btn">-</button>
                <input type="text" value="${producto.cantidad}" id="quantity-${producto.id}" readonly>
                <button id="btnMas-${producto.id}" class="quantity-btn">+</button>
            </div>
        </td>
        <td id="total-${producto.id}">${producto.moneda} ${producto.precio * producto.cantidad}</td>
        <td><button id="delete-${producto.id}" class="delete-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
        </button></td>
    `;

    tabla.appendChild(fila);

    // Evento para incrementar o decrementar cantidad
    document.getElementById(`btnMenos-${producto.id}`).addEventListener('click', function() {
        if (producto.cantidad > 1) {
            producto.cantidad--;
            actualizarCantidad(producto);
        }
    });

    document.getElementById(`btnMas-${producto.id}`).addEventListener('click', function() {
        producto.cantidad++;
        actualizarCantidad(producto);
    });

    // Evento para eliminar el producto
    document.getElementById(`delete-${producto.id}`).addEventListener('click', function() {
        eliminarProducto(producto.id);
    });
}

// Función para actualizar cantidad y total
function actualizarCantidad(producto) {
    // Actualizar la cantidad en el input
    document.getElementById(`quantity-${producto.id}`).value = producto.cantidad;

    // Actualizar el precio total del producto
    document.getElementById(`total-${producto.id}`).innerText = `${producto.moneda} ${producto.precio * producto.cantidad}`;

    // Guardar cambios en el localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let index = carrito.findIndex(item => item.id === producto.id);
    if (index !== -1) {
        carrito[index].cantidad = producto.cantidad;
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    calcularTotal();
}

// Función para eliminar un producto del carrito
function eliminarProducto(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Filtrar el carrito para eliminar el producto con el ID especificado
    carrito = carrito.filter(producto => producto.id !== id);

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    calcularTotal();

    // Eliminar la fila del producto en el DOM
    let fila = document.getElementById(`fila-${id}`);
    if (fila) {
        fila.remove();
    }
    
    // Si el carrito queda vacío, mostrar el mensaje de carrito vacío
    if (carrito.length === 0) {
        cargarCarrito();
    }
}

// Cargar los productos al cargar la página
window.onload = function() {
    let monedaSeleccionada = localStorage.getItem('monedaSeleccionada') || 'USD';
    document.getElementById(monedaSeleccionada === 'USD' ? 'dolares' : 'pesos').checked = true;
    cargarCarrito();
    document.querySelectorAll('input[name="opcion"]').forEach((input) => {
        input.addEventListener('change', calcularTotal);
    });
};


document.getElementById("continue-btn").addEventListener("click", function(){
    window.location.href = "categories.html";
});

document.getElementById("checkout-btn").addEventListener("click", function(){
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito.length === 0) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Seleccione un producto para realizar la compra",
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Compra realizada con éxito!!",
            showConfirmButton: false,
            timer: 1500
        });
        localStorage.removeItem("carrito");
        cargarCarrito();
    }
});

function calcularTotal(){
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let moneda = document.getElementById('dolares').checked ? 'USD' : 'UYU';
    localStorage.setItem('monedaSeleccionada', moneda);
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

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos los elementos que vamos a manejar
    const creditCardOption = document.getElementById('creditCard');
    const debitCardOption = document.getElementById('debitCard');
    const cashOption = document.getElementById('cash');
    const cardDetailsForm = document.getElementById('card-details-form');

    // Función para mostrar/ocultar el formulario de la tarjeta
    function toggleCardDetails() {
        if (creditCardOption.checked || debitCardOption.checked) {
            cardDetailsForm.style.display = 'block'; // Mostramos el formulario
        } else {
            cardDetailsForm.style.display = 'none';  // Ocultamos el formulario
        }
    }

    // Agregamos eventos a los radio buttons para controlar la visibilidad
    creditCardOption.addEventListener('change', toggleCardDetails);
    debitCardOption.addEventListener('change', toggleCardDetails);
    cashOption.addEventListener('change', toggleCardDetails);
});
