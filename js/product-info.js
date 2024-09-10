const API_URL = "https://japceibal.github.io/emercado-api/products";

function showData(product) {
    const productInfoDiv = document.getElementById('product-info');
    productInfoDiv.innerHTML = `
    <div class="card-body">
    <div class="carrusel">
        <button class="anterior" onclick="changeSlide(-1)">&#10094;</button>
         <div class="slides">
            <img src="img/prod${product.id}_1.jpg" alt="Imagen 1">
            <img src="img/prod${product.id}_2.jpg" alt="Imagen 2">
            <img src="img/prod${product.id}_3.jpg" alt="Imagen 3">
            <img src="img/prod${product.id}_4.jpg" alt="Imagen 4">
            <img src="img/prod${product.id}_5.jpg" alt="Imagen 5">
          </div>
        <button class="siguiente" onclick="changeSlide(1)">&#10095;</button>     
      </div> 
      <h2 class="modelo">${product.name}</h2>
      <span class="precio">$${product.cost} ${product.currency}</span><br>
      <br>
      <p class="descripcion">${product.description}</p>
      <p class="vendidos">${product.soldCount} productos vendidos.</p>
    </div>   
    `;
}

function getAPIData(url) {
    const productId = localStorage.getItem('prodID');
    return fetch(`${url}/${productId}.json`)
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

let currentSlide = 0;
showSlide(currentSlide);
function showSlide(index) {
    const slides = document.querySelectorAll('.slides img');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
    });
}

function changeSlide(n) {
    showSlide(currentSlide += n);
}

