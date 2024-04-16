//Ver Mas "Tarot"

function toggleContentTarot() {
    var button = document.getElementById('ver-mas-btn-tarot');
    var contenidoAdicional = document.getElementById('contenido-adicional-tarot');

    if (button && contenidoAdicional) {
        contenidoAdicional.classList.toggle('visible');

        button.classList.toggle('active');

        var verMasLabel = button.querySelector('.ver-mas-label');
        verMasLabel.textContent = (contenidoAdicional.classList.contains('visible')) ? '↑' : '↓';
    } else {
        console.error('Elementos no encontrados. Asegúrate de que los identificadores sean correctos.');
    }
}

//Ver Mas "Sanación"

function toggleContentSanacion() {
    var button = document.getElementById('ver-mas-btn-sanacion');
    var contenidoAdicional = document.getElementById('contenido-adicional-sanacion');

    if (button && contenidoAdicional) {
        contenidoAdicional.classList.toggle('visible');

        button.classList.toggle('active');

        var verMasLabel = button.querySelector('.ver-mas-label');
        verMasLabel.textContent = (contenidoAdicional.classList.contains('visible')) ? '↑' : '↓';
    } else {
        console.error('Elementos no encontrados. Asegúrate de que los identificadores sean correctos.');
    }
}