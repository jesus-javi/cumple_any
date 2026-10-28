// Activar música (con click por si el navegador bloquea el autoplay automático)
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("musicaFondo");
    audio.play().catch(() => {
        document.body.addEventListener('click', () => audio.play(), { once: true });
    });
});

function cambiarMensaje() {
    const textoMensaje = document.getElementById("mensaje");
    textoMensaje.innerText = "¡Enviado con éxito!";
    textoMensaje.style.color = "orangered";
    textoMensaje.style.transform = "scale(1.2)";
}

// Tiempo de carga (5 segundos)
setTimeout(cambiarMensaje, 5000);

// Alertas al terminar
setTimeout(function mensajeRecibido() {
    alert("RECIBISTE UN ABRAZO ... uwu✨ ");
    alert("Eres un encanto, espero que te haya gustado ❤️");
    alert("FELIZ CUMPLEAÑOS 'ANY' ✨ ");
}, 6000);