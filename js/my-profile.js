(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        // Almacenar datos en localStorage
        localStorage.setItem('nombre', document.getElementById('nombre').value);
        localStorage.setItem('snombre', document.getElementById('snombre').value);
        localStorage.setItem('apellido', document.getElementById('apellido').value);
        localStorage.setItem('sapellido', document.getElementById('sapellido').value);
        localStorage.setItem('telefono', document.getElementById('telefono').value);
        localStorage.setItem('email', document.getElementById('email').value);

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();