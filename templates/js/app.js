document.addEventListener("DOMContentLoaded", function () {
  const heroImages = document.querySelector(".hero-holder");
  const imgs = document.querySelectorAll(".hero-holder img");
  const nextButton = document.getElementById("nextBtn");
  const prevButton = document.getElementById("prevBtn");
  let counter = 0;

  nextButton.addEventListener("click", function () {
    if (counter == imgs.length - 1) {
      counter = 0;
      heroImages.style.transform = `translateX(-${counter * 100}%)`;
    } else if (counter < imgs.length - 1) {
      counter++;
      heroImages.style.transform = `translateX(-${counter * 100}%)`;
    }

    // console.log(counter);
  });

  prevButton.addEventListener("click", function () {
    if (counter == 0) {
      counter = imgs.length - 1;
      heroImages.style.transform = `translateX(-${counter * 100}%)`;
    } else if (counter > 0) {
      counter--;
      heroImages.style.transform = `translateX(-${counter * 100}%)`;
    }
    // console.log(counter);
  });

  //
  const hamburger = document.querySelector(".hamburger-menu");
  const links = document.querySelector(".links");
  hamburger.addEventListener("click", function () {
    links.style.display = links.style.display === "flex" ? "none" : "flex";
  });
});
