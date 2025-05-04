document.getElementById("mainText").addEventListener("click", () => {
  const runes = document.getElementById("runes");
  runes.style.opacity = 1;

  setTimeout(() => {
    const door = document.getElementById("door");
    door.classList.add("open");

    setTimeout(() => {
      document.getElementById("logoSection").style.display = "flex";
    }, 2000);
  }, 1500);
});

document.getElementById("futureBtn").addEventListener("click", () => {
  const backgroundVideo = document.getElementById("backgroundVideo");
  const finalVideo = document.getElementById("finalVideo");

  backgroundVideo.style.display = "none";
  finalVideo.style.display = "block";
  finalVideo.play();

  setTimeout(() => {
    document.getElementById("finalSection").style.display = "flex";
  }, 7000); // espera a que termine parte del video
});
