document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

document.getElementById('logout').addEventListener('click', function() {
    // Borrar los datos del usuario en localStorage
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userName');
    
    // Redirigir a la página de login
    window.location.href = "login.html";
});
