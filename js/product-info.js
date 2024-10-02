const API_URL = "https://japceibal.github.io/emercado-api/products";

function showData(product) {
    const productInfoDiv = document.getElementById('product-info');
    productInfoDiv.innerHTML = `
    <div class="card-body">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="img/prod${product.id}_1.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="img/prod${product.id}_2.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="img/prod${product.id}_3.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="img/prod${product.id}_4.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="img/prod${product.id}_5.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
        </div>
        <div class="container info">
            <h2 class="modelo">${product.name}</h2>
            <span class="precio">$${product.cost} ${product.currency}</span><br>
            <br>
            <p class="descripcion">${product.description}</p>
            <p class="vendidos">${product.soldCount} productos vendidos.</p>
        </div>
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

document.addEventListener('DOMContentLoaded', function() {
    const relatedProducts = [
        { name: 'Producto 1', image: 'producto1.jpg', description: 'Descripción del producto 1' },
        { name: 'Producto 2', image: 'producto2.jpg', description: 'Descripción del producto 2' },
        { name: 'Producto 3', image: 'producto3.jpg', description: 'Descripción del producto 3' }
    ];

    const container = document.getElementById('related-products-container');

    relatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productCard.appendChild(productImage);

        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productCard.appendChild(productName);

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productCard.appendChild(productDescription);

        container.appendChild(productCard);
        
        productCard.addEventListener('click', () => {
            window.location.href = `product-info.html?id=${product.id}`;
        });
    });
    });


