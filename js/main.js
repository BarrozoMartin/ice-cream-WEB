const botonRegistro = document.getElementById('showFormButton');
const botonCerrar = document.querySelector('.btnClosed');
const imagenCerrar = document.querySelector('.btnClosed img');

if (botonRegistro) {
    botonRegistro.addEventListener('click', function () {
        window.location.href = './pages/formulario.html';
    });
}

if (botonCerrar) {
    botonCerrar.addEventListener('click', function () {
        window.location.href = '../index.html';
    });

    if (imagenCerrar) {
        imagenCerrar.addEventListener('click', function () {
            window.location.href = '../index.html';
        });
    }
}