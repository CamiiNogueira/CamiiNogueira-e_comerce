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

    const relatedProductsDiv = document.getElementById('related-products-container');
    relatedProductsDiv.innerHTML = '';
    product.relatedProducts.forEach(products => {
        relatedProductsDiv.innerHTML += `
            <div class="product-card" onclick="setprodID(${products.id});">
                <div class="contenedor-foto">
                    <img src="${products.image}" alt="${products.name}">
                </div>
                <br>
                <h2 class="modelo">${products.name}</h2>
            </div>
        `;
        
    }); 
    
}

function setprodID(id) {
        localStorage.getItem("prodID", id);
        window.location = "product-info.html";
}

function showComments(comments){
    const comentariosDiv = document.getElementById('calificaciones-container');
    comentariosDiv.innerHTML = '';
    comments.forEach(comment => {
        comentariosDiv.innerHTML += `
        <div class="comentario">
        <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#007bff"></rect>
        <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
        </svg>
            <div class="usuario">${comment.user}</div>
            <div class="fecha">${comment.dateTime}</div>
            <div class="comentario">${comment.description}</div>
            <div class="calificacion-estrellas">
                    ${Array.from({ length: 5 }, (_, i) => 
                        `<span class="star ${i < comment.score ? 'filled' : ''}">★</span>`
                    ).join('')}
            </div>
        </div>
        <hr>
        `;
    }); 
}

document.addEventListener("DOMContentLoaded", function(e){
    const productId = localStorage.getItem('prodID');
    getJSONData(`${PRODUCT_INFO_URL}${productId}.json`).then(function(resultObj){
        if (resultObj.status === "ok"){
            showData(resultObj.data)
        }
    });
    getJSONData(`${PRODUCT_INFO_COMMENTS_URL}${productId}.json`).then(function(resultObj){
        if (resultObj.status === "ok"){
            showComments(resultObj.data)
        }
    });
});





