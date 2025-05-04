document.getElementById('introBtn').addEventListener('click', () => {
  // Desvanece la intro
  const intro = document.getElementById('introSection');
  intro.style.transition = 'opacity 1s ease';
  intro.style.opacity = '0';
  setTimeout(() => intro.remove(), 1000);

  // Muestra el overlay de la puerta
  const overlay = document.querySelector('.overlay');
  overlay.style.display = 'flex';
  // Aquí puedes agregar la animación de abrir la puerta
});
