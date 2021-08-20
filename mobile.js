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

const Res_Sec7 = document.querySelector(".section7"); // sec4

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
  darkodes.forEach((Element) => {
    Element.style = ``;
  });
  morphdes.forEach((Element) => {
    Element.style = ``;
  });
  darko.style = ``;
  morphism.style = ``;
  darkoTitle.style = ``;
  morphTitle.style = ``;
  Res_Sec5.className = `section5_Mobile`;
  NullObj.classList.add("section5");

  // Sec6 - About ME
  TechPaticles.forEach((Element) => {
    Element.style = ``;
  });
  wave.forEach((Element) => {
    Element.style = ``;
  });
  Res_Sec6.className = `section6_Mobile`;
  NullObj.classList.add("section6");

  // Sec7 - Contact Me
  Res_Sec7.className = `section7_Mobile`;
  NullObj.classList.add("section7");

  //  Footer
  footer.className = `Footer_Mobile`;

  //  Nav Side & Top
  TagBox.style = `display: none;`;

  docbdy.style = ``;
  SideNav.style = ``;
  buttonLine[0].style = ``;
  buttonLine[1].style = ``;
  NavValidate = false;

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
  darkodes.forEach((Element) => {
    Element.style = ``;
  });
  morphdes.forEach((Element) => {
    Element.style = ``;
  });
  darkoTitle.style = ``;
  darko.style = ``;
  morphism.style = ``;
  darkoTitle.style = ``;
  morphTitle.style = ``;
  Res_Sec5.className = `section5`;
  NullObj.classList.remove("section5");

  // Sec6 - About ME
  Res_Sec6.className = `section6`;
  NullObj.classList.remove("section6");

  // Sec7 - Contact Me
  Res_Sec7.className = `section7`;
  NullObj.classList.remove("section7");

  // Footer
  footer.className = `footer`;

  //  Nav Side & Top
  TagBox.style = `display: flex;`;
  TagBox.style.opacity = `100%`;

  docbdy.style = ``;
  SideNav.style = ``;
  buttonLine[0].style = ``;
  buttonLine[1].style = ``;
  NavValidate = false;

  console.log("Desktop");
}

// Mobile Animation And React

// Get The Elements

const MrB_Des_Mobile = document.querySelector(".mrsB-destext");
const Ctr_Des_Mobile = document.querySelector("#sec3_layout");

// // // Reating
document.addEventListener("scroll", (e) => {
  if (window.innerWidth <= 768) {
    // Mrs.Brown
    let MrB_Des_Mobile_Rec = MrB_Des_Mobile.getBoundingClientRect();

    if (
      MrB_Des_Mobile_Rec.top < window.innerHeight &&
      MrB_Des_Mobile_Rec.top > MrB_Des_Mobile_Rec.height
    ) {
      // let MrB_scroll_Val = 1 - MrB_Des_Mobile_Rec.top / window.innerHeight;
      // MrB_Des_Mobile.scrollTop =
      //   (MrB_scroll_Val * MrB_Des_Mobile.scrollHeight) / 2;
    }

    // Centaurus
    //    let Ctr_Des_Mobile_Rec = Ctr_Des_Mobile.getBoundingClientRect();
    //    if (Ctr_Des_Mobile_Rec.top < window.innerHeight / 2) {
    //      Ctr_Des_Mobile.scrollTo({
    //        top: 0,
    //        left: Ctr_Des_Mobile.scrollWidth * 0.3,
    //        behavior: "smooth",
    //      });
    //    }
    //    if (Ctr_Des_Mobile_Rec.top > window.innerHeight * 1.2) {
    //      Ctr_Des_Mobile.scrollTo({
    //        top: 0,
    //        left: 0,
    //        behavior: "smooth",
    //      });
    //    }

    // DiiZi & Darko
    let Morph_Rec = morphism.getBoundingClientRect();
    let Morph_Sensor1 = Morph_Rec.top - window.innerHeight * 0.7;

    let Darko_Rec = darko.getBoundingClientRect();
    let Darko_Sensor = Darko_Rec.top - window.innerHeight * 0.55;

    if (Morph_Sensor1 < 0 && Darko_Sensor > 0) {
      morphism.style.transform = `scale(1)`;
      morphism.style.marginLeft = `2vw`;
      darko.style.width = `30vw`;
      morphism.style.width = `56vw`;

      darko.style.transform = `scale(0.7)`;
      darko.style.marginRight = `-17vw`;

      morphTitle.style.transform = `translateX(22.3vw)`;
      darkoTitle.style.transform = `translateX(0)`;

      dzSub.style.animation = `hubout2 3s forwards`;

      for (let index = 0; index < morphdes.length; index++) {
        const element = morphdes[index];
        const element2 = darkodes[index];

        let number = index * 0.2 + 0.1;

        element2.style.transform = `translateX(0)`;
        element.style.transform = `translateX(24.9vw)`;
        element.style.transition = `all 1.2s ${number}s cubic-bezier(0.2, 0, 0, 1)`;
      }
    }

    if (Darko_Sensor < 0) {
      darko.style.transform = `scale(1)`;
      darko.style.marginRight = `2vw`;
      morphism.style.width = `30vw`;
      darko.style.width = `56vw`;

      darkoTitle.style.transform = `translateX(-22.3vw)`;
      morphTitle.style.transform = `translateX(0)`;

      morphism.style.transform = `scale(0.7)`;
      morphism.style.marginLeft = `-17vw`;

      for (let index = 0; index < darkodes.length; index++) {
        const element = darkodes[index];
        const element2 = morphdes[index];

        let number = index * 0.2 + 0.1;

        element.style.transform = `translateX(-24.9vw)`;
        element2.style.transform = `translateX(0)`;

        element.style.transition = `all 1.2s ${number}s cubic-bezier(0.25, 0, 0, 1)`;
      }
    }
    console.log(MrB_Des_Mobile);
  }
});
