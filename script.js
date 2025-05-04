const mainText    = document.getElementById('mainText');
const runes       = document.getElementById('runes');
const door        = document.getElementById('door');
const logoSection = document.getElementById('logoSection');
const futureBtn   = document.getElementById('futureBtn');
const fenixVideo  = document.getElementById('fenixVideo');
const finalSec    = document.getElementById('finalSection');

// 1) Click en el texto → aparece la puerta y se abre
mainText.addEventListener('click', () => {
  // Oculto texto y runas
  mainText.style.display = 'none';
  runes.style.display    = 'none';

  // Muestro y animo la puerta
  door.style.display = 'block';
  setTimeout(() => door.classList.add('open'), 50);

  // Tras terminar animación de 1.5s, paso al logo
  setTimeout(() => {
    door.remove();                    // quito la puerta
    logoSection.style.display = 'flex'; // muestro logo+botón
  }, 1600);
});

// 2) Click en "Futuro" → vídeo del Fénix → formulario
futureBtn.addEventListener('click', () => {
  logoSection.style.display = 'none';
  fenixVideo.style.display  = 'block';
  fenixVideo.play();

  fenixVideo.onended = () => {
    fenixVideo.remove();
    finalSec.style.display = 'flex';
  };
});
