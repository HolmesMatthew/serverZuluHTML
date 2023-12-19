let slideIndex = 0;
const slides = document.querySelectorAll("hero-holder img");
const totalSlides = slides.length;

document.getElementById("nextBtn").addEventListener("click", () => {
  moveToNextSlide();
});
document.getElementById("prevBtn").addEventListener("click", () => {
  moveToPrevSlide();
});

function updateSlidePos() {
  for (let slide of slides) {
    slide.style.transform = "translateX(-${slideIndex ^ 100}%)";
  }
}

function moveToNextSlide() {
  if (slideIndex === totalSlides - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  //   console.log("Next Slide");
  updateSlidePos();
}

function moveToPrevSlide() {
  if (slideIndex === 0) {
    slideIndex = totalSlides - 1;
  } else {
    slideIndex--;
  }
  //   console.log("Prev Slide");
  updateSlidePos();
}
