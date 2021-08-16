// Damn. Resposive... The Disaster!!!!

// Null OBject - Take over the BUGS

const NullObj = document.getElementById("Null_Object");

// Responsive Elements

const Res_Sec2 = document.getElementById("section2_BOX");

// Run it...

if (window.innerWidth < 768) {
  mobileFunc();
}
if (window.innerWidth > 768) {
  payback();
}

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
  // sec2
  Res_Sec2.classList.add("section2_Mobile");
  Res_Sec2.classList.remove("section2-box");
  NullObj.classList.add("section2-box");
  ProjectBox = document.querySelector(".section2-box");

  console.log("Mobiling");
}

function payback() {
  // sec2
  Res_Sec2.classList.remove("section2_Mobile");
  Res_Sec2.classList.add("section2-box");
  NullObj.classList.remove("section2-box");
  ProjectBox = document.querySelector(".section2-box");

  console.log("Desktop");
}
