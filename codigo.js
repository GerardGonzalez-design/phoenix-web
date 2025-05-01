// Esperamos que cargue todo el contenido
window.onload = () => {
  const clickText = document.getElementById("click-text");
  const runasContainer = document.getElementById("runas-container");
  const runas = document.querySelectorAll(".runa");
  const puerta = document.getElementById("puerta");
  const videoPortal = document.getElementById("video-portal");
  const videoGuerra = document.getElementById("video-guerra");
  const videoPhoenix = document.getElementById("video-phoenix");
  const logoFinal = document.getElementById("logo-final");
  const btnFuturo = document.getElementById("btn-futuro");
  const futuroSection = document.getElementById("futuro-section");
  const formulario = document.getElementById("formulario");

  // Evento inicial: al hacer clic en el texto
  clickText.addEventListener("click", () => {
    clickText.style.display = "none";
    runasContainer.classList.remove("hidden");

    // Encendemos las runas progresivamente
    runas.forEach((runa, i) => {
      setTimeout(() => {
        runa.style.filter = "brightness(1)";
        if (i === runas.length - 1) abrirPuerta();
      }, i * 1000);
    });
  });

  // Abrimos la puerta y mostramos el primer video
  function abrirPuerta() {
    setTimeout(() => {
      puerta.src = "assets/puerta_abierta.png";
      puerta.style.transform = "scale(1.2)";
    }, 1000);

    setTimeout(() => {
      runasContainer.style.display = "none";
      videoPortal.classList.remove("hidden");

      // Luego del video de la cena, vamos a la guerra
      setTimeout(() => {
        videoPortal.classList.add("hidden");
        videoGuerra.classList.remove("hidden");

        setTimeout(() => {
          videoGuerra.classList.add("hidden");
          videoPhoenix.classList.remove("hidden");

          setTimeout(() => {
            videoPhoenix.classList.add("hidden");
            logoFinal.classList.remove("hidden");
          }, 6000); // duración del phoenix

        }, 8000); // duración guerra

      }, 8000); // duración cena

    }, 3000);
  }

  // Botón "Futuro"
  btnFuturo.addEventListener("click", () => {
    logoFinal.classList.add("hidden");
    futuroSection.classList.remove("hidden");

    setTimeout(() => {
      futuroSection.classList.add("hidden");
      formulario.classList.remove("hidden");
    }, 12000); // duración del futuro
  });
};
