const mainText    = document.getElementById('mainText');
const runes       = document.getElementById('runes');
const door        = document.getElementById('door');
const logoSection = document.getElementById('logoSection');
const futureBtn   = document.getElementById('futureBtn');
const fenixVideo  = document.getElementById('fenixVideo');
const finalSec    = document.getElementById('finalSection');

// 1) Click en el texto → mostrar y abrir la puerta
mainText.addEventListener('click', () => {
  // Ocultar texto y runas
  mainText.style.display = 'none';
  runes.style.display    = 'none';

  // Mostrar la puerta
  door.style.display = 'block';
  // Iniciar la animación (ligero delay para redibujar)
  setTimeout(() => door.classList.add('open'), 50);

  // Tras 1.5s de animación, quito la puerta y muestro logo+botón
  setTimeout(() => {
    door.remove();
    logoSection.style.display = 'flex';
  }, 1600);
});

// 2) Click en "Futuro" → reproducir Fénix → mostrar formulario
futureBtn.addEventListener('click', () => {
  logoSection.style.display = 'none';
  fenixVideo.style.display  = 'block';
  fenixVideo.play();

  fenixVideo.onended = () => {
    fenixVideo.remove();
    finalSec.style.display = 'flex';
  };
});
