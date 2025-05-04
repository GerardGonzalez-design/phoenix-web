document.getElementById("mainText").addEventListener("click", () => {
  const door = document.getElementById("door");
  const bgVideo = document.getElementById("backgroundVideo");
  const video2 = document.getElementById("video2");
  const video3 = document.getElementById("video3");

  // Abrir la puerta
  door.classList.add("open");

  setTimeout(() => {
    // Ocultar y luego eliminar background video
    bgVideo.pause();
    bgVideo.remove();

    // Mostrar segundo video (guerra)
    video2.style.display = "block";
    video2.play();

    // Al terminar guerra → mostrar fénix
    video2.onended = () => {
      video2.pause();
      video2.remove();

      video3.style.display = "block";
      video3.play();

      video3.onended = () => {
        video3.pause();
        video3.remove();

        // Eliminar puerta del DOM
        door.remove();

        // Mostrar logo + botón futuro
        document.getElementById("logoSection").style.display = "flex";
      };
    };
  }, 2000);
});

document.getElementById("futureBtn").addEventListener("click", () => {
  const finalVideo = document.getElementById("finalVideo");

  finalVideo.style.display = "block";
  finalVideo.play();

  finalVideo.onended = () => {
    finalVideo.pause();
    finalVideo.remove();

    document.getElementById("finalSection").style.display = "flex";
  };
});

