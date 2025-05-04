document.getElementById("mainText").addEventListener("click", () => {
  const door = document.getElementById("door");
  const bgVideo = document.getElementById("backgroundVideo");
  const video2 = document.getElementById("video2");
  const video3 = document.getElementById("video3");

  // Iniciar la animación de la puerta (se abre)
  door.classList.add("open");

  // Al terminar la animación de la puerta (2 segundos)
  setTimeout(() => {
    // Pausar y eliminar el primer video
    bgVideo.pause();
    bgVideo.remove();

    // Mostrar y reproducir el video de guerra
    video2.style.display = "block";
    video2.play();

    video2.onended = () => {
      // Pausar y eliminar el video de guerra
      video2.pause();
      video2.remove();

      // Mostrar y reproducir el video del Fénix
      video3.style.display = "block";
      video3.play();

      video3.onended = () => {
        // Pausar y eliminar el video del Fénix
        video3.pause();
        video3.remove();

        // Eliminar la puerta después de la animación
        door.remove();

        // Mostrar el logo y el botón "Futuro"
        const logoSection = document.getElementById("logoSection");
        logoSection.style.display = "flex";
      };
    };
  }, 2000); // Tiempo igual al de la animación de la puerta
});

document.getElementById("futureBtn").addEventListener("click", () => {
  const finalVideo = document.getElementById("finalVideo");

  // Mostrar y reproducir el video final
  finalVideo.style.display = "block";
  finalVideo.play();

  finalVideo.onended = () => {
    // Pausar y eliminar el video final
    finalVideo.pause();
    finalVideo.remove();

    // Mostrar el formulario final
    const finalSection = document.getElementById("finalSection");
    finalSection.style.display = "flex";
  };
});
