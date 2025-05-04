document.getElementById("mainText").addEventListener("click", () => {
  const door = document.getElementById("door");
  const bgVideo = document.getElementById("backgroundVideo");
  const video2 = document.getElementById("video2");
  const video3 = document.getElementById("video3");

  // Iniciar la animación de la puerta (se abre)
  door.classList.add("open");

  setTimeout(() => {
    bgVideo.pause();
    bgVideo.remove();

    // Reproducir segundo video (guerra)
    video2.style.display = "block";
    video2.play();

    video2.onended = () => {
      video2.pause();
      video2.remove();

      video3.style.display = "block";
      video3.play();

      video3.onended = () => {
        video3.pause();
        video3.remove();

        // Eliminar puerta
        door.remove();

        // Mostrar el logo + botón futuro
        const logoSection = document.getElementById("logoSection");
        logoSection.style.display = "flex";
      };
    };
  }, 2000); // Tiempos ajustados a la duración de la animación
});

document.getElementById("futureBtn").addEventListener("click", () => {
  const finalVideo = document.getElementById("finalVideo");

  finalVideo.style.display = "block";
  finalVideo.play();

  finalVideo.onended = () => {
    finalVideo.pause();
    finalVideo.remove();

    // Mostrar formulario final
    const finalSection = document.getElementById("finalSection");
    finalSection.style.display = "flex";
  };
});
