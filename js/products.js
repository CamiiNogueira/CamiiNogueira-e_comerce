const API_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

// Función para mostrar los datos en el DOM
function showData(data) {
    const fila = document.getElementById("fila");
    fila.innerHTML = '';

data.products.forEach(product => {
    fila.innerHTML += `
    <div class="item" onclick="cargar(this)">
        <div class="contenedor-foto">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <h2 class="modelo">${product.name}</h2>
        <span class="precio">Precio: ${product.cost} ${product.currency}</span>
        <p class="descripcion">${product.description}</p>
        <p class="vendidos">Vendidos: ${product.soldCount}</p>
    </div>
    `;
    });
}

function getAPIData(url) {
    return fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        showData(data);
    })
    .catch(error => {
        console.error('Hubo un problema con el fetch:', error);
    });
}

getAPIData(API_URL);


let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item){
    quitarBordes();
    mostrador.style.width = "70%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";
/*Aparezca la imagen seleccionada en el recuadro*/
    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  item.getElementsByTagName("h2")[0].innerHTML;

    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;

    descripSeleccionada.innerHTML = item.getElementsByTagName("p")[0].innerHTML;

}

function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";

    quitarBordes();
}

function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}
