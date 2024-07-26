// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document ready');
});

// Validación del formulario de contacto
document.querySelector('#contactModal form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    alert('Mensaje enviado. ¡Gracias por contactarnos!');
    $('#contactModal').modal('hide'); // Oculta el modal
});

 // Manejar el envío del formulario de contacto
 const contactForm = document.getElementById('contactForm');
 if (contactForm) {
     contactForm.addEventListener('submit', function(e) {
         e.preventDefault();
         const nombre = document.getElementById('nombre').value;
         const email = document.getElementById('email').value;
         const mensaje = document.getElementById('mensaje').value;

         // Aquí puedes agregar la lógica para enviar el formulario a un servidor
         console.log('Formulario enviado:', { nombre, email, mensaje });
         alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
         contactForm.reset();
     });
 }

