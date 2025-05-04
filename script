document.addEventListener("DOMContentLoaded", () => {
  const mainText = document.querySelector(".main-text");
  const runes = document.querySelectorAll(".rune");
  const door = document.querySelector(".door");
  const logoSection = document.querySelector(".logo-section");
  const futureButton = document.getElementById("futureBtn");
  const finalVideo = document.getElementById("finalVideo");
  const finalSection = document.querySelector(".final-section");

  let runesActivated = false;

  mainText.addEventListener("click", () => {
    if (runesActivated) return;
    runesActivated = true;

    runes.forEach((rune, index) => {
      setTimeout(() => {
        rune.style.opacity = 1;
      }, index * 500);
    });

    setTimeout(() => {
      door.style.opacity = 1;
    }, runes.length * 500 + 500);

    setTimeout(() => {
      door.classList.add("open");
    }, runes.length * 500 + 2000);

    setTimeout(() => {
      logoSection.style.display = "flex";
      logoSection.classList.add("fade-in");
    }, runes.length * 500 + 3500);
  });

  futureButton.addEventListener("click", () => {
    finalVideo.style.display = "block";
    finalVideo.play();

    finalVideo.onended = () => {
      finalSection.style.display = "flex";
    };
  });
});
