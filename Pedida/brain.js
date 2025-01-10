
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validar las credenciales
        if ((username === 'sofia' && password === '2909') || (username === 'samuel' && password === '1406')) {
            window.location.href = 'index.html'; // Redirigir a index.html si las credenciales son correctas
        } else {
            alert('Username o Password incorrectos');
        }
    });
});


// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencias a los botones existentes y nuevos
    const dreamBoardBtn = document.getElementById('dreamBoardBtn');
    const memoriesBtn = document.getElementById('memoriesBtn');
    const dayOneBtn = document.getElementById('dayOneBtn');
    const oneDayBtn = document.getElementById('oneDayBtn');

    // Evento de clic para el botón "Tablero de sueños"
    dreamBoardBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        window.location.href = 'DreamBoard.html'; // Redirigir a tablero.html
    });

    // Evento de clic para el botón "Recuerdos"
    memoriesBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        window.location.href = 'Memories.html'; // Redirigir a recuerdos.html
    });

    // Evento de clic para el botón "Day one"
    dayOneBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        window.location.href = 'DayOne.html'; // Redirigir a dayone.html
    });

    // Evento de clic para el botón "One day"
    oneDayBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        window.location.href = 'OneDay.html'; // Redirigir a oneday.html
    });
});


function playMusic(audioId) {
    // Detener cualquier audio que esté sonando
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        if (audio.id !== audioId) {
            audio.pause();
            audio.currentTime = 0;
        }
    });

    // Reproducir el audio seleccionado
    const audio = document.getElementById(audioId);
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
