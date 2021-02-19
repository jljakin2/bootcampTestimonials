const backButton = document.querySelector(".btn-prev");
const nextButton = document.querySelector(".btn-next");
const allSlides = [...document.querySelectorAll(".testimonial")];

let active = null;
let newActive = null;

function changeSlide(forward) {
  clickable = false;
  active = document.querySelector(".active");
  const activeSlideIndex = allSlides.indexOf(active);

  if (forward) {
    newActive = allSlides[(activeSlideIndex + 1) % allSlides.length];
    active.classList.toggle("active");
    newActive.classList.toggle("active");
  } else {
    newActive =
      allSlides[(activeSlideIndex - 1 + allSlides.length) % allSlides.length];
    active.classList.toggle("active");
    newActive.classList.toggle("active");
  }
}

// Event listeners
nextButton.addEventListener("click", () => {
  changeSlide(true);
});

backButton.addEventListener("click", () => {
  changeSlide(false);
});

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "ArrowRight") {
    changeSlide(true);
  } else if (e.key === "ArrowLeft") {
    changeSlide(false);
  }
});
