document.getElementById("mainText").addEventListener("click", () => {
  const door = document.getElementById("door");
  const bgVideo = document.getElementById("backgroundVideo");
  const video2 = document.getElementById("video2");
  const video3 = document.getElementById("video3");

  // Abrir la puerta
  door.classList.add("open");

  // Reproducir segundo video (guerra)
  setTimeout(() => {
    bgVideo.style.display = "none";
    video2.style.display = "block";
    video2.play();

    // Al terminar el video de guerra, reproducir fénix
    video2.onended = () => {
      video2.style.display = "none";
      video3.style.display = "block";
      video3.play();

      video3.onended = () => {
        video3.style.display = "none";
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
    document.getElementById("finalSection").style.display = "flex";
  };
});
