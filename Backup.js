// Hello There,
// Here's Jason. Have a good day!!!

// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Carrosel React
const carrousel = document.querySelector("#carrosel");
const slider = document.querySelector("#item_holder");
const Prev = document.querySelector("#Prev");
const Next = document.querySelector("#Next");

const slideItem = document.querySelectorAll(".slide_item");

var SlideCounter = 1;

// // Update size
var clientSize = window.innerWidth;
window.addEventListener("load", (e) => {
  clientSize = window.innerWidth;
  slideItem[SlideCounter].style.backgroundSize = `115%`;
});

window.addEventListener("resize", (e) => {
  clientSize = window.innerWidth;
  slider.style.transform = `translateX(${-(SlideCounter * clientSize)}px)`;
});

// // React
var slideTime = setInterval(slidePeform, 5000);

function slidePeform() {
  SlideCounter++;

  slider.style.transition = `transform 1s cubic-bezier(0.25, 0, 0, 1)`;
  slider.style.transform = `translateX(${-(SlideCounter * clientSize)}px)`;

  slideItem[SlideCounter].style.backgroundSize = `115%`;
  slideItem[SlideCounter - 1].style.backgroundSize = `100%`;

  console.log(SlideCounter);

  if (SlideCounter === 2) {
    slideItem[slideItem.length - 1].style.backgroundSize = `100%`;
  }

  if (SlideCounter === slideItem.length - 1) {
    slideItem[1].style.backgroundSize = `115%`;
    SlideCounter = 1;

    var awaitTime = 0;
    var awaitfunc = setInterval(slideReset, 1100);
    function slideReset() {
      awaitTime++;

      slider.style.transition = `none`;
      slider.style.transform = `translateX(${-(1 * clientSize)}px)`;
      if ((awaitTime = 1)) {
        clearInterval(awaitfunc);
        awaitTime = 0;
      }
    }
  }
}
