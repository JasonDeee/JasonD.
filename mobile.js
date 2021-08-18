// Damn. Resposive... The Disaster!!!!

// Null OBject - Take over the BUGS

const NullObj = document.getElementById("Null_Object");

// Responsive Elements

const Res_Sec2 = document.getElementById("section2_BOX"); // sec2

const Res_Sec3 = document.querySelector(".section3"); // sec3
const Res_Sec3_Layout = document.getElementById("sec3_layout");

const Res_Sec4 = document.querySelector(".section4"); // sec4

const Res_Sec5 = document.querySelector(".section5"); // sec4

const Res_Sec6 = document.querySelector(".section6"); // sec4

// Run it...

var firstCheck = setTimeout(() => {
  if (window.innerWidth < 768) {
    mobileFunc();
  }
  if (window.innerWidth > 768) {
    payback();
  }
  clearTimeout(firstCheck);
}, 100);

window.addEventListener("resize", (e) => {
  console.log(window.innerWidth);
  if (window.innerWidth < 768) {
    mobileFunc();
  }
  if (window.innerWidth > 768) {
    payback();
  }
});

function mobileFunc() {
  // sec2 - Mrs.Brown
  Res_Sec2.classList.add("section2_Mobile");
  Res_Sec2.classList.remove("section2-box");
  NullObj.classList.add("section2-box");
  ProjectBox = document.querySelector(".section2-box");

  // Sec3 - Centaurus
  Res_Sec3_Layout.style = ``;
  spic.forEach((Element) => {
    Element.style = ``;
  });
  Res_Sec3.classList.add("section3_Mobile");
  Res_Sec3.classList.remove("section3");
  NullObj.classList.add("section3");
  var section3 = document.querySelector(".section3");
  Res_Sec3_Layout.classList.replace("section3-layout", "sec3_mobile_layout");

  // Sec4 - Katun Intro
  playICO.style = ``;
  playICO.className = `play-bttn`;
  descriptions.style = ``;
  Res_Sec4.classList.add("section4_Mobile");
  Res_Sec4.classList.remove("section4");
  NullObj.classList.add("section4");

  // Sec5 - DiiZi
  Res_Sec5.className = `section5_Mobile`;
  NullObj.classList.add("section5");

  // Sec6 - About ME
  Res_Sec6.className = `section6_Mobile`;
  NullObj.classList.add("section6");

  console.log("Mobiling");
}

function payback() {
  // sec2
  Res_Sec2.classList.remove("section2_Mobile");
  Res_Sec2.classList.add("section2-box");
  NullObj.classList.remove("section2-box");
  ProjectBox = document.querySelector(".section2-box");

  // Sec3 - Centaurus
  Res_Sec3.classList.add("section3");
  Res_Sec3.classList.remove("section3_Mobile");
  NullObj.classList.remove("section3");
  var section3 = document.querySelector(".section3");
  Res_Sec3_Layout.classList.replace("sec3_mobile_layout", "section3-layout");

  // Sec4 - Katun Intro
  Res_Sec4.classList.add("section4");
  Res_Sec4.classList.remove("section4_Mobile");
  NullObj.classList.remove("section4");

  // Sec5 - DiiZi
  Res_Sec5.className = `section5`;
  NullObj.classList.remove("section5");

  // Sec6 - About ME
  Res_Sec6.className = `section6`;
  NullObj.classList.remove("section6");

  console.log("Desktop");
}
