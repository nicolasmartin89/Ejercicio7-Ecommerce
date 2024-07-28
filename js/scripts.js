document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM completamente cargado y analizado");

  const htmlElement = document.documentElement;
  const switchElement = document.getElementById("darkModeSwitch");
  const bodyElement = document.body;

  // Manejo de modo oscuro
  if (switchElement) {
      console.log("Switch de modo oscuro encontrado");
      const currentTheme = localStorage.getItem("bsTheme") || "dark";
      htmlElement.setAttribute("data-bs-theme", currentTheme);
      bodyElement.classList.toggle("dark-mode", currentTheme === "dark");
      switchElement.checked = currentTheme === "dark";
  
      switchElement.addEventListener("change", function () {
          if (this.checked) {
              htmlElement.setAttribute("data-bs-theme", "dark");
              bodyElement.classList.add("dark-mode");
              localStorage.setItem("bsTheme", "dark");
          } else {
              htmlElement.setAttribute("data-bs-theme", "light");
              bodyElement.classList.remove("dark-mode");
              localStorage.setItem("bsTheme", "light");
          }
      });
  } else {
      console.log("Switch de modo oscuro no encontrado");
  }

  // Búsqueda en tiempo real
  const searchInput = document.getElementById('search');
  if (searchInput) {
      console.log("Campo de búsqueda encontrado");
      searchInput.addEventListener('input', () => {
          const filter = searchInput.value.toLowerCase();
          const productCards = document.querySelectorAll('.card');
          productCards.forEach(card => {
              const title = card.querySelector('.card-title').innerText.toLowerCase();
              if (title.includes(filter)) {
                  card.parentElement.style.display = '';
              } else {
                  card.parentElement.style.display = 'none';
              }
          });
      });
  } else {
      console.log("Campo de búsqueda no encontrado");
  }

  // Mostrar la ventana emergente automáticamente después de 3 segundos
  const offerModalElement = document.getElementById('offerModal');
  if (offerModalElement) {
      console.log("Modal de oferta encontrado");
      setTimeout(function() {
          var offerModal = new bootstrap.Modal(offerModalElement);
          offerModal.show();
          offerModalElement.querySelector('.modal-content').style.backgroundColor = '#ccc'; // Set modal background color
      }, 3000);
  } else {
      console.log("Modal de oferta no encontrado");
  }

  // Cambio de color del botón
  var botones = document.querySelectorAll('#miBoton');
  if (botones.length > 0) {
      console.log("Botón encontrado");
      botones.forEach(boton => {
          boton.addEventListener('click', function(event) {
              event.preventDefault(); // Previene la navegación inmediata
              this.classList.add('clicked');
              
              // Cambia el color de vuelta después de 300ms
              setTimeout(() => {
                  this.classList.remove('clicked');
                  // Navega a la URL después de mostrar el efecto
                  window.location.href = this.getAttribute('href');
              }, 300);
          });
      });
  } else {
      console.log("Botón no encontrado");
  }

  // Manejo del formulario
  const form = document.getElementById("personalForm");
  const resultDiv = document.getElementById("result");

  if (form) {
      form.addEventListener("submit", handleFormSubmit);

      function handleFormSubmit(event) {
          event.preventDefault();
          const formData = getFormData();
          clearErrorMessages();

          if (isFormValid(formData)) {
              displayFormData(formData);
          }
      }

      function getFormData() {
          return {
              nombre: document.getElementById("nombre").value.trim(),
              apellido: document.getElementById("apellido").value.trim(),
              email: document.getElementById("email").value.trim(),
              consulta: document.getElementById("consulta").value.trim(),
          };
      }

      function isFormValid(formData) {
          let isValid = true;

          if (!isNameValid(formData.nombre)) {
              displayErrorForField(
                  "nombre-error",
                  "Complete el campo Nombre con la información correcta (solo letras, entre 2 y 60 caracteres)."
              );
              isValid = false;
          }

          if (!isNameValid(formData.apellido)) {
              displayErrorForField(
                  "apellido-error",
                  "Complete el campo Apellido con la información correcta (solo letras, entre 2 y 60 caracteres)."
              );
              isValid = false;
          }

          if (!isEmailValid(formData.email)) {
              displayErrorForField(
                  "email-error",
                  "Complete el campo Email con una dirección válida (por ejemplo, usuario@dominio.com)."
              );
              isValid = false;
          }

          if (!isConsultValid(formData.consulta)) {
              displayErrorForField(
                  "consulta-error",
                  "Complete el campo Consulta con la información correcta (no puede estar vacío y solo puede contener letras y números)."
              );
              isValid = false;
          }

          return isValid;
      }

      function isNameValid(name) {
          const nameRegex = /^[a-zA-Z\s]{2,60}$/;
          return nameRegex.test(name);
      }

      function isEmailValid(email) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
      }

      function isConsultValid(consulta) {
          const nameRegex = /^[a-zA-Z0-9]*$/;
          return consulta.trim() !== "" && nameRegex.test(consulta);
      }

      function displayFormData(formData) {
          alert(
              `Formulario enviado con éxito:
              
              Nombre: ${formData.nombre}
              Apellido: ${formData.apellido}
              Email: ${formData.email}
              Consulta: ${formData.consulta}`
          );
      }

      function displayErrorForField(fieldId, message) {
          const errorSpan = document.getElementById(fieldId);
          errorSpan.textContent = message;
      }

      function clearErrorMessages() {
          const errorSpans = document.querySelectorAll(".error-message");
          errorSpans.forEach((span) => {
              span.textContent = "";
          });
      }
  } else {
      console.log("Formulario personal no encontrado");
  }
});
