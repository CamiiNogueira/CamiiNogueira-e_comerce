const API_URL = "https://japceibal.github.io/emercado-api/products";

function showData(product) {
    const productInfoDiv = document.getElementById('product-info');
    productInfoDiv.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.images[0]}" alt="${product.name}" style="max-width: 300px;">
        <p>${product.description}</p>
        <p>Precio: $${product.cost} ${product.currency}</p>
        <p>Cantidad Vendidos: ${product.soldCount}</p>
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
