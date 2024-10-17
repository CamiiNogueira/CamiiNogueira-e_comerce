const button = document.getElementById('guardar');

button.addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.setItem('nombre', document.getElementById('nombre').value);
    localStorage.setItem('snombre', document.getElementById('snombre').value);
    localStorage.setItem('apellido', document.getElementById('apellido').value);
    localStorage.setItem('sapellido', document.getElementById('sapellido').value);
    localStorage.setItem('telefono', document.getElementById('telefono').value);
    localStorage.setItem('email', document.getElementById('email').value);
});
