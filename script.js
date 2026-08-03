function switchTab(event, tabName) {
    // 1. Selecciona todas las pestañas del buscador y remueve la clase activa
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // 2. Activa la pestaña cliqueada
    event.currentTarget.classList.add('active');

    // 3. Oculta todos los bloques de contenido de las pestañas
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // 4. Muestra el contenido que coincide con el ID recibido en 'tabName'
    const activeContent = document.getElementById(tabName);
    if (activeContent) {
        activeContent.style.display = 'block';
    }

    console.log("Cambiando formulario a la sección: " + tabName);
}

function toggleCardFocus(cardEl) {
    // Detecta la cuadrícula específica donde está la tarjeta presionada
    const grid = cardEl.parentElement;
    const isAlreadySelected = cardEl.classList.contains('selected');

    // Quita la selección de todas las tarjetas de esta cuadrícula
    const cards = grid.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('selected'));

    if (isAlreadySelected) {
        // Si se vuelve a tocar, se des-selecciona
        grid.classList.remove('has-selected');
    } else {
        // Marca la tarjeta actual como seleccionada
        cardEl.classList.add('selected');
        grid.classList.add('has-selected');
    }
}

// Abrir imagen centrada a pantalla completa
function openImageModal(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    
    modalImg.src = imgSrc;
    modal.classList.add('show');
}

// Cerrar el visor al hacer clic en cualquier lado o en la 'X'
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
}