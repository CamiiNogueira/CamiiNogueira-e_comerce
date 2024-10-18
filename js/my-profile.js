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

document.getElementById('myForm').submit(); // Enviar el formulario después de guardar en localStorage

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el envío del formulario hasta que se valide

  // Resetear mensajes de error
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(message => message.style.display = 'none');

  // Obtener valores de los campos
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let email = document.getElementById('email').value;
  let telefono = document.getElementById('telefono').value;

  let isValid = true;

  // Validar campos obligatorios
  if (nombre.trim() === '') {
    document.getElementById('error-nombre').textContent = 'Por favor, introduce un nombre válido.';
    document.getElementById('error-nombre').style.display = 'block';
    isValid = false;
  }

  if (apellido.trim() === '') {
    document.getElementById('error-apellido').textContent = 'Por favor, introduce un apellido válido.';
    document.getElementById('error-apellido').style.display = 'block';
    isValid = false;
  }

  if (email.trim() === '') {
    document.getElementById('error-email').textContent = 'Por favor, introduce un correo electrónico válido.';
    document.getElementById('error-email').style.display = 'block';
    isValid = false;
  } else {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      document.getElementById('error-email').textContent = 'Por favor, introduce un correo electrónico válido.';
      document.getElementById('error-email').style.display = 'block';
      isValid = false;
    }
  }

  // Validar que el teléfono es un número (opcional)
  if (telefono && isNaN(telefono)) {
    document.getElementById('error-telefono').textContent = 'Por favor, introduce un número de teléfono válido.';
    document.getElementById('error-telefono').style.display = 'block';
    isValid = false;
  }

  // Si todas las validaciones pasan, envía el formulario
  if (isValid) {
    this.submit();
  }
});