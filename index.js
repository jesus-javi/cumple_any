const botonAbrir = document.getElementById("boton-abrir");
const pantallaInicio = document.getElementById("pantalla-inicio");
const audio = document.getElementById("musicaFondo");
const tituloContenedor = document.querySelector(".titulo-contenedor");
const burbuja = document.getElementById("subir");

const frases = [
    "1, 2, 3 😜",
    "¡Happy Birthday to You! ✨",
    "¡Happy Birthday to You! ✨",
    "¡Happy Birthday to You! Anelin ✨",
    "ajaja HOY ES TU CUMPLE BBY 😊",
    "ASI QUE QUIERO VERT MUY FELIZ🚀",
    "TE QUEIRO MUCHO  🌟",
    "¡No dejes de brillar! 🌟"
];
let indice = 0;

// Toda la magia inicia al presionar el botón "Abrir Sorpresa"
botonAbrir.addEventListener("click", () => {
    
    // 1. Ocultamos la pantalla de inicio
    pantallaInicio.style.opacity = "0";
    setTimeout(() => {
        pantallaInicio.style.display = "none";
    }, 500);

    // 2. Reproducimos la música de inmediato
    audio.play();

    // 3. Activamos la animación del título para que aparezca a los 3 segundos
    tituloContenedor.classList.add("iniciar-animacion");

    // 4. Lanzamos el confeti exactamente a los 3 segundos (junto con el título)
    setTimeout(lanzarConfeti, 3000);

    // 5. Arrancamos el cambio de frases de la burbuja
    setInterval(() => {
        burbuja.style.opacity = "0";
        setTimeout(() => {
            indice = (indice + 1) % frases.length;
            burbuja.innerText = frases[indice];
            burbuja.style.opacity = "1"; 
        }, 500); 
    }, 3500); 
});

// --- LÓGICA DEL CONFETI ---
function lanzarConfeti() {
    let contenedor = document.getElementById('contenedor-confeti');
    if (!contenedor) {
        contenedor = document.createElement('div');
        contenedor.id = 'contenedor-confeti';
        document.body.prepend(contenedor);
    }
    
    const colores = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93', '#ff99c8', '#00f5d4'];
    
    for (let i = 0; i < 150; i++) {
        const confeti = document.createElement('div');
        confeti.classList.add('confeti');
        
        confeti.style.left = Math.random() * 100 + 'vw';
        confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        
        const ancho = Math.random() * 8 + 5;
        confeti.style.width = ancho + 'px';
        confeti.style.height = (ancho * (Math.random() * 1.5 + 1)) + 'px';
        
        if (Math.random() > 0.5) {
            confeti.style.borderRadius = '50%';
        }
        
        confeti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confeti.style.animationDelay = (Math.random() * 2) + 's';
        
        contenedor.appendChild(confeti);
    }
}