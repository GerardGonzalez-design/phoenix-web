const mainText    = document.getElementById('mainText');
const runes       = document.getElementById('runes');
const door        = document.getElementById('door');
const logoSection = document.getElementById('logoSection');
const futureBtn   = document.getElementById('futureBtn');
const videoCont   = document.getElementById('videoContainer');
const fenixVideo  = document.getElementById('fenixVideo');
const continueBtn = document.getElementById('continueBtn');
const finalSec    = document.getElementById('finalSection');

// Paso 1 → 2: click en texto
mainText.addEventListener('click', () => {
  document.getElementById('stepText').style.display = 'none';
  door.style.display = 'block';
  // espera un tick y abre
  requestAnimationFrame(() => door.classList.add('open'));
  // tras animación, mostrar logo
  door.addEventListener('transitionend', () => {
    door.remove();
    logoSection.style.display = 'flex';
  }, { once: true });
});

// Paso 3 → 4: click en Futuro
futureBtn.addEventListener('click', () => {
  logoSection.style.display = 'none';
  videoCont.style.display = 'flex';
});

// Paso 4 → 5: botón Continuar o al acabar vídeo
continueBtn.addEventListener('click', showForm);
fenixVideo.addEventListener('ended', showForm);

function showForm() {
  fenixVideo.pause();
  videoCont.style.display = 'none';
  finalSec.style.display = 'flex';
}
