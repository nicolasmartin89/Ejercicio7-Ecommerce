document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
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
});

document.addEventListener('DOMContentLoaded', function() {
    // Mostrar la ventana emergente automáticamente después de 3 segundos
    setTimeout(function() {
        var offerModal = new bootstrap.Modal(document.getElementById('offerModal'));
        offerModal.show();
    }, 3000);
});


// Cambio color boton
document.addEventListener('DOMContentLoaded', function() {
    var boton = document.getElementById('miBoton');
    
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
