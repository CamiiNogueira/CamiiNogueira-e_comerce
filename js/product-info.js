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

const productId = localStorage.getItem('prodID');
const commentsUrl = `https://japceibal.github.io/emercado-api/products_comments/`;

if (productId) {
    fetch(commentsUrl)
    .then(response => {
        if (response.headers.get('content-type')?.includes('application/json')) {
            return response.json();
        } else {
            throw new Error("El archivo no es un JSON válido.");
        }
    })
    .then(comments => {
        const calificacionesContainer = document.getElementById('calificaciones-container');

        comments.forEach(comment => {
            const calificacionElement = document.createElement('div');
            calificacionElement.classList.add('calificacion');

            calificacionElement.innerHTML = `
                <div class="usuario">${comment.user}</div>
                <div class="fecha">${comment.dateTime}</div>
                <div class="comentario">${comment.description}</div>
                <div class="calificacion-estrellas">
                    ${Array.from({ length: 5 }, (_, i) => 
                        `<span class="star ${i < comment.score ? 'filled' : ''}">★</span>`
                    ).join('')}
                </div>
            `;

            calificacionesContainer.appendChild(calificacionElement);
        });
    })
    .catch(error => {
        console.error('Error al obtener los comentarios:', error);
    });
} else {
    console.error("Error: No se ha definido el ID del producto para los comentarios.");
}