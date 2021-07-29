// Hi There, Jason Here!
// Have a good Day!

//
// Preload Event
const PreloadBox = document.querySelector("#Preloader");
const PreloadCircle = document.querySelector("#PreloadCircle");
const PreloadCircle2 = document.querySelector("#PreloadCircle2");
const bodyload = document.querySelector("body");

// // jQuerry Method

const TagBox = document.querySelector(".tag-display");

$("#IMGPreload").ready(function () {
  // Handler for .load() called.
  TagBox.style.opacity = `100%`;
  TagBox.style.transform = `translateY(250px) translateX(200px)`;

  var PreloadTimeInterval = setInterval(PreloadPerform, 100);
  var PreloadTime = 0;
  function PreloadPerform() {
    PreloadTime++;
    if (PreloadTime == 10) {
      // Play
      PreloadCircle.style.animation = `CirclePreload 1.5s cubic-bezier(0.25, 0, 0, 1) 0.18s forwards`;
      PreloadCircle2.style.animation = `CirclePreload 1.5s cubic-bezier(0.25, 0, 0, 1) 0s forwards`;
      PreloadBox.style.animation = `BoxDisappear 1.6s cubic-bezier(0.25, 0, 0, 1) 0s forwards`;
    }
    if (PreloadTime == 27) {
      // Finishing
      PreloadBox.style.display = `none`;
      PreloadBox.style.pointerEvents = `none`;
      bodyload.style.overflowY = `visible`;
      PreloadFinish();
      return;
    }
    function PreloadFinish() {
      clearInterval(PreloadTimeInterval);
      PreloadTime = null;
    }
  }
});

// Vanilla Method

// // // document.addEventListener("DOMContentLoaded", (e) => {
// // //   var PreloadTimeInterval = setInterval(PreloadPerform, 100);
// // //   var PreloadTime = 0;
// // //   function PreloadPerform() {
// // //     PreloadTime++;
// // //     if (PreloadTime == 10) {
// // //       // Play
// // //       PreloadCircle.style.animation = `CirclePreload 1.5s cubic-bezier(0.25, 0, 0, 1) 0.18s forwards`;
// // //       PreloadCircle2.style.animation = `CirclePreload 1.5s cubic-bezier(0.25, 0, 0, 1) 0s forwards`;
// // //       PreloadBox.style.animation = `BoxDisappear 1.6s cubic-bezier(0.25, 0, 0, 1) 0s forwards`;
// // //     }
// // //     if (PreloadTime == 27) {
// // //       // Finishing
// // //       PreloadBox.style.display = `none`;
// // //
// // //       bodyload.style.overflowY = `visible`;
// // //       PreloadFinish();
// // //       return;
// // //     }
// // //     function PreloadFinish() {
// // //       clearInterval(PreloadTimeInterval);
// // //       PreloadTime = null;
// // //     }
// // //   }
// // // });

// Reset Scroll On Page Reload

// // jQuery Method (This was Too much shorty)

$(document).ready(function () {
  $("html").animate({ scrollLeft: 0 }, 1);
  $("body").animate({ scrollLeft: 0 }, 1);
});

// My Cat ALLWAY WATCHING YOU
const section1 = document.querySelector(".section1");

let cat = {
  HeadBG: document.querySelector("#FACE_BG"),
  foreHead: document.querySelector("#Ear_F_Mask"),
  EarBG: document.querySelector("#Ear_BG"),
  EarL: document.querySelector("#Ear_F_L"),
  EarR: document.querySelector("#Ear_F_R"),
  EarMaskL: document.querySelector("#Ear_F_R"),

  EyeL: document.querySelector(".cat-14"),
  EyeR: document.querySelector(".cat-16"),
  EyeBowL: document.querySelector("#EyeBow_L"),
  EyeBowR: document.querySelector("#EyeBow_R"),
  EyeBallL: document.querySelector("#EyeBall_L"),
  EyeBallR: document.querySelector("#EyeBall_R"),

  Nose: document.querySelector("#NOSE"),

  Mouth: document.querySelector("#Mouth"),
  BeardL: document.querySelector("#Beard_L"),
  BeardR: document.querySelector("#Beard_R"),

  BodyBG: document.querySelector("#Body_BG"),
  Hand: document.querySelector("#HAND"),
  FatLine1: document.querySelector("#Fat_line1"),
  FatLine2: document.querySelector("#Fat_line2"),
};

section1.addEventListener("mousemove", (e) => {
  const catBox = document.querySelector(".funny-pic").getBoundingClientRect();

  var offsetX = e.pageX - (catBox.left + catBox.width / 2 + window.scrollX);
  var offsetY = e.pageY - (catBox.top + catBox.height / 2 + window.scrollY);
  var offset = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
  var scaleX = offsetX / window.innerWidth;
  var scaleY = offsetY / window.innerHeight;
  var scale =
    offset /
    Math.sqrt(
      window.innerWidth * window.innerWidth +
        window.innerHeight * window.innerHeight
    );

  // Head React
  cat.HeadBG.style.transform = `rotateX(${offsetY / 20}deg)
  rotateY(${-offsetX / 30}deg)`;
  cat.foreHead.style.transform = `rotateX(${offsetY / 20}deg)
  rotateY(${-offsetX / 27}deg)`;
  cat.EarBG.style.transform = `rotateX(${offsetY / 20}deg)
  rotateY(${-offsetX / 26}deg)`;

  cat.EarL.style.transform = `rotateX(${offsetY / 30}deg)
  rotateY(${-offsetX / 26}deg) translateX(${offsetX / 40}px)
  translateY(${offsetY / 20}px) scaleY(${1 + scaleY / 50})
  scaleX(${1 + scaleX / 20})
  `;

  cat.EarR.style.transform = `rotateX(${offsetY / 30}deg)
  rotateY(${-offsetX / 26}deg) translateX(${offsetX / 40}px)
  translateY(${offsetY / 20}px) scaleY(${1 + scaleY / 10})
  scaleX(${1 + scaleX / 5})
  `;

  cat.EyeL.style.transform = `scale(${1 - scaleX / 600 + scaleY / 200})
  translateX(${offsetX / 40}px) translateY(${offsetY / 60 + offsetX / 200}px)
  rotateZ(${offsetX / 240}deg)`;
  cat.EyeR.style.transform = `scale(${1 + scaleX / 5 - scaleY / 50})
  translateX(${offsetX / 60}px) translateY(${-offsetY / 65 + offsetX / 150}px)
  rotateZ(${offsetX / 240}deg)`;
  cat.EyeBowL.style.transform = `
  translateX(${offsetX / 30}px) translateY(${offsetY / 20}px)`;
  cat.EyeBowR.style.transform = `
  translateX(${offsetX / 80}px) translateY(${offsetY / 20}px)`;
  cat.EyeBallL.style.transform = `
  translateX(${-offsetX / 30}px)
  translateY(${-offsetY / 50 - offsetX / 180}px)`;
  cat.EyeBallR.style.transform = `
  translateX(${-offsetX / 50}px) 
  translateY(${-offsetY / 50 - offsetX / 130}px)`;

  cat.Nose.style.transform = `
  translateX(${offsetX / 60}px) translateY(${offsetY / 18}px)`;

  cat.Mouth.style.transform = `
  translateX(${offsetX / 60}px) translateY(${offsetY / 7}px)`;
  cat.BeardL.style.transform = `translateX(${offsetX / 10}px)
  translateY(${offsetY / 10}px)`;
  cat.BeardR.style.transform = `translateX(${-offsetX / 20}px)
  translateY(${offsetY / 10}px)`;

  // Body React
  cat.BodyBG.style.transform = `skewX(${-offsetX / 300}deg)`;
  cat.Hand.style.transform = `skewX(${offsetX / 100}deg)`;
  cat.FatLine1.style.transform = `translateX(${offsetX / 100}px)`;
  cat.FatLine2.style.transform = `translateX(${-offsetX / 50}px)`;
});

section1.addEventListener("mouseleave", (e) => {
  const catBox = document.querySelector(".funny-pic").getBoundingClientRect();

  var offsetX = 0;
  var offsetY = 0;
  var offset = 0;
  var scaleX = 0;
  var scaleY = 0;
  var scale = 0;
  // Head React
  cat.HeadBG.style.transform = `rotateX(${offsetY / 20}deg)
  rotateY(${-offsetX / 30}deg)`;
  cat.foreHead.style.transform = `rotateX(${offsetY / 20}deg)
  rotateY(${-offsetX / 27}deg)`;
  cat.EarBG.style.transform = `rotateX(${offsetY / 20}deg)
  rotateY(${-offsetX / 26}deg)`;

  cat.EarL.style.transform = `rotateX(${offsetY / 30}deg)
  rotateY(${-offsetX / 26}deg) translateX(${offsetX / 40}px)
  translateY(${offsetY / 20}px) scaleY(${1 + scaleY / 50})
  scaleX(${1 + scaleX / 20})
  `;

  cat.EarR.style.transform = `rotateX(${offsetY / 30}deg)
  rotateY(${-offsetX / 26}deg) translateX(${offsetX / 40}px)
  translateY(${offsetY / 20}px) scaleY(${1 + scaleY / 10})
  scaleX(${1 + scaleX / 5})
  `;

  cat.EyeL.style.transform = `scale(${1 - scaleX / 600 + scaleY / 200})
  translateX(${offsetX / 40}px) translateY(${offsetY / 60 + offsetX / 200}px)
  rotateZ(${offsetX / 240}deg)`;
  cat.EyeR.style.transform = `scale(${1 + scaleX / 5 - scaleY / 50})
  translateX(${offsetX / 60}px) translateY(${-offsetY / 65 + offsetX / 150}px)
  rotateZ(${offsetX / 240}deg)`;
  cat.EyeBowL.style.transform = `
  translateX(${offsetX / 30}px) translateY(${offsetY / 20}px)`;
  cat.EyeBowR.style.transform = `
  translateX(${offsetX / 80}px) translateY(${offsetY / 20}px)`;
  cat.EyeBallL.style.transform = `
  translateX(${-offsetX / 40}px)
  translateY(${-offsetY / 60 - offsetX / 200}px)`;
  cat.EyeBallR.style.transform = `
  translateX(${-offsetX / 60}px) 
  translateY(${-offsetY / 65 - offsetX / 150}px)`;

  cat.Nose.style.transform = `
  translateX(${offsetX / 60}px) translateY(${offsetY / 18}px)`;

  cat.Mouth.style.transform = `
  translateX(${offsetX / 60}px) translateY(${offsetY / 7}px)`;
  cat.BeardL.style.transform = `translateX(${offsetX / 10}px)
  translateY(${offsetY / 10}px)`;
  cat.BeardR.style.transform = `translateX(${-offsetX / 20}px)
  translateY(${offsetY / 10}px)`;

  // Body React
  cat.BodyBG.style.transform = `skewX(${-offsetX / 300}deg)`;
  cat.Hand.style.transform = `skewX(${offsetX / 100}deg)`;
  cat.FatLine1.style.transform = `translateX(${offsetX / 100}px)`;
  cat.FatLine2.style.transform = `translateX(${-offsetX / 50}px)`;
});
// "Project - section2
var body = document.querySelector("body");
var sec2 = document.querySelector(".section2");
var ProjectBox = document.querySelector(".section2-box");
var MRSB = document.querySelector(".mrsB");
var MRSBs2 = document.querySelector(".mrsB2");
var MRSBs3 = document.querySelector(".mrsB3");
var MRSBs4 = document.querySelector(".mrsB4");

var MRBtag = document.querySelector(".mrsB-tag");
var subconnect = document.querySelector(".sub-connector");
var sectionconect = document.querySelector(".section-connector");
var MRBname = document.querySelector(".mrsB-title");

ProjectBox.addEventListener("mousemove", (e) => {
  var scrolledY = window.scrollY;
  var scrolledX = window.scrollX;
  var rect = ProjectBox.getBoundingClientRect();

  let middleLeft = rect.left + rect.width / 2 + scrolledX;
  let middleTop = rect.top + rect.height / 2 + scrolledY;
  let xAxis = (middleLeft - e.pageX) / (rect.width / 40);
  let yAxis = (middleTop - e.pageY) / (rect.height / 24);
  let rad = Math.atan2(e.pageY - middleTop, e.pageX - middleLeft);
  let angle = (rad * 180) / Math.PI + 270;
  let glareX = e.pageX - (rect.left + scrolledX);
  let glareY = e.pageY - (rect.top + scrolledY);
  sec2.style.transform = `rotateY(${xAxis + 6}deg) rotateX(${yAxis}deg)`;
});

ProjectBox.addEventListener("mouseenter", (e) => {
  MRBname.style.letterSpacing = `0.5vw`;
  sec2.style.transform = `translateZ(-7vw)`;
  // ProjectBox.style.transform = `translateZ(-7vw)`;
  MRSB.style.width = `30vw`;
  MRSB.style.transform = `translateZ(10vw)  translateX(15.7vw) `;
  MRSBs2.style.transform = `translateZ(7vw) translateX(10.5vw) `;
  MRSBs3.style.transform = `translateZ(4vw) translateX(6vw) `;
  MRSBs4.style.transform = `translateZ(1vw) translateX(2vw) `;
  sec2.style.transition = `all 0.15s ease-out`;
  MRBtag.style.transform = `translateZ(10vw)`;
  MRBtag.style.transition = `all 0.65s ease-out`;
  subconnect.style.transform = `translateY(-3.6vw)`;
  sectionconect.style.transform = `translateY(-4vw)`;
});

ProjectBox.addEventListener("mouseleave", (e) => {
  MRSBs3.style.transform = `translateZ(0) translateX(0) `;
  MRSB.style.transform = `translateZ(0) translateX(0)`;
  MRSB.style.width = `45.7vw`;
  MRSBs2.style.transform = `translateZ(0) translateX(0) `;
  MRSBs4.style.transform = `translateZ(0) translateX(0) `;

  // MRSB.style.boxShadow = `-0.3vw 0.3vw 1vw 0 #00000000`;
  MRBname.style.letterSpacing = `0.1vw`;
  sectionconect.style.transform = `translateZ(0)`;
  subconnect.style.transform = `translatey(0)`;
  sec2.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
  // ProjectBox.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
  sec2.style.transition = `all 0.5s ease-out`;
  MRBtag.style.transform = `translateZ(0)`;
});

// section3
var spic = document.querySelectorAll("#pic");
var section3 = document.querySelector(".section3");
var sec3Ly = document.querySelector(".section3-layout");
var scale = 0.3;
var OriginX = [0, 0, 0, 0, 0];
var OriginY = [0, 0, 0, 0, 0];
for (i = 0; i < spic.length; i++) {
  var Obj = spic[i].getBoundingClientRect();
  OriginX[i] = Obj.width;
  OriginY[i] = Obj.height;
}

document.addEventListener("mouseenter", (e) => {
  for (i = 0; i < spic.length; i++) {
    var Obj = spic[i].getBoundingClientRect();
    var ObjectX = Obj.x + Obj.width / 2;
    var ScreenMin1 = (window.innerWidth * 2) / 10;
    var ScreenMin2 = (window.innerWidth * 3) / 10;

    var ScreenMax1 = (window.innerWidth * 8) / 10;
    var ScreenMax2 = (window.innerWidth * 7) / 10;

    if (ObjectX < ScreenMin1) {
      scale = 0.3;
    }
    if (ObjectX > ScreenMax1) {
      scale = 0.3;
    }

    if (ObjectX < ScreenMin2 && ObjectX > ScreenMin1) {
      scale =
        0.3 +
        0.7 * (Math.abs(ObjectX - ScreenMin2) / ((window.innerWidth * 2) / 10));
    }
    if (ObjectX < ScreenMax2 && ObjectX > ScreenMin2) {
      scale = 1;
    }
    if (ObjectX < ScreenMax1 && ObjectX > ScreenMax2) {
      scale =
        0.3 +
        0.7 * (Math.abs(ObjectX - ScreenMax1) / ((window.innerWidth * 2) / 10));
    }
    spic[i].style.width = `${scale * OriginX[i]}px`;
    spic[i].style.height = `${scale * OriginY[i]}px`;
  }
  section3.addEventListener("mousemove", (e) => {
    var shiftVal1 = (e.pageX - window.innerWidth / 2) / window.innerWidth;
    var shiftVal2 = shiftVal1 * (0 - 130);
    sec3Ly.style.transform = `translateX(${shiftVal2}vw)`;

    for (i = 0; i < spic.length; i++) {
      var Obj = spic[i].getBoundingClientRect();
      var ObjectX = Obj.x + Obj.width / 2;
      var ScreenMin1 = (window.innerWidth * 2) / 10;
      var ScreenMin2 = (window.innerWidth * 3) / 10;

      var ScreenMax1 = (window.innerWidth * 8) / 10;
      var ScreenMax2 = (window.innerWidth * 7) / 10;

      if (ObjectX < ScreenMin1) {
        scale = 0.3;
      }
      if (ObjectX > ScreenMax1) {
        scale = 0.3;
      }

      if (ObjectX < ScreenMin2 && ObjectX > ScreenMin1) {
        scale =
          0.3 +
          0.7 *
            (Math.abs(ObjectX - ScreenMin2) / ((window.innerWidth * 2) / 10));
      }
      if (ObjectX < ScreenMax2 && ObjectX > ScreenMin2) {
        scale = 1;
      }
      if (ObjectX < ScreenMax1 && ObjectX > ScreenMax2) {
        scale =
          0.3 +
          0.7 *
            (Math.abs(ObjectX - ScreenMax1) / ((window.innerWidth * 2) / 10));
      }
      spic[i].style.width = `${scale * OriginX[i]}px`;
      spic[i].style.height = `${scale * OriginY[i]}px`;
    }
  });
});

// section4 Video

const sec4 = document.querySelector(".section4");
var katunVideo = document.querySelector(".katun-vid");
var playICO = document.querySelector(".play-bttn");
var varlidate = false;

// load video

var srcval = false;

sec4.addEventListener("mouseenter", (e) => {
  srcval = true;
});

if ((srcval = true)) {
  katunVideo.src = `./VIDEO/Katun.Intro.mp4`;
}
// Video React

katunVideo.addEventListener("mousemove", (e) => {
  var icoBorder = playICO.getBoundingClientRect();
  var VIDborder = katunVideo.getBoundingClientRect();
  cX = e.pageX - VIDborder.left - window.scrollX - icoBorder.width / 2;
  cY = e.pageY - VIDborder.top - window.scrollY - icoBorder.height / 2;
  playICO.style.left = `${cX}px`;
  playICO.style.top = `${cY}px`;
});

katunVideo.addEventListener("mouseenter", (e) => {
  playICO.style.transition = `all 0.15s ease-out`;
});
katunVideo.addEventListener("mouseleave", (e) => {
  var icoBorder = playICO.getBoundingClientRect();

  playICO.style.transition = `all 0.85s ease-out`;
  playICO.style.left = `35%`;
  playICO.style.top = `40%`;
});

var play = document.querySelector("#play-icon");
var pause = document.querySelector("#pse-icon");
var descriptions = document.querySelector(".katun-des");

katunVideo.addEventListener("click", (e) => {
  varlidate = !varlidate;

  if (varlidate == true) {
    katunVideo.play();
    play.style.marginLeft = `0`;
    play.style.width = `0`;
    pause.style.width = `4vw`;

    descriptions.style.transform = `translateX(31vw)`;
    descriptions.style.opacity = `50%`;
    descriptions.style.border = `0.17vw solid #ffffff36`;
    descriptions.style.borderRadius = `1.5vw`;

    katunVideo.addEventListener("mouseenter", (e) => {
      playICO.style.opacity = `100%`;
    });
    katunVideo.addEventListener("mouseleave", (e) => {
      playICO.style.opacity = `0%`;
    });
  }
  if (varlidate == false) {
    playICO.style.opacity = `100%`;
    katunVideo.addEventListener("mouseleave", (e) => {
      playICO.style.opacity = `100%`;
    });

    descriptions.style.transform = `translateX(0)`;
    descriptions.style.opacity = `100%`;
    descriptions.style.border = `0 solid #ffffff36`;

    descriptions.style.borderRadius = `0`;
    descriptions.style.borderLeft = `0.17vw solid #ffffff36`;
    descriptions.style.borderBottomRightRadius = `1.5vw`;
    descriptions.style.borderTopRightRadius = `1.5vw`;

    katunVideo.pause();
    play.style.marginLeft = `0.6vw`;
    play.style.width = `4vw`;
    pause.style.width = `0vw`;
  }
});

// section 5
const darko = document.querySelector("#darko");
const morphism = document.querySelector("#morphism");
const subtitle = document.querySelector("#sub-t");
const blackbar = document.querySelectorAll("#blackbar");
const dzSub = document.querySelector("#dz-sub");

const darkoTitle = document.querySelector("#darko-title");
const morphTitle = document.querySelector("#morph-title");

const darkodes = document.querySelectorAll(".Darko-des");
const darkoD = document.querySelector("#darko-des");

const morphdes = document.querySelectorAll(".Morph-des");
const morphD = document.querySelector("#morph-des");

darko.addEventListener("mouseenter", (e) => {
  darko.style.transform = `scale(1)`;
  darko.style.marginRight = `2vw`;
  morphism.style.width = `30vw`;
  darkoTitle.style.transform = `translateX(-22.3vw)`;

  for (let index = 0; index < darkodes.length; index++) {
    const element = darkodes[index];
    number = index * 0.2 + 0.1;

    element.style.transform = `translateX(-24.9vw)`;
    element.style.transition = `all 1.2s ${number}s cubic-bezier(0.25, 0, 0, 1)`;
  }
});

darko.addEventListener("mouseleave", (e) => {
  darko.style.transform = `scale(0.7)`;
  darko.style.marginRight = `-17vw`;
  morphism.style.width = `56vw`;

  darkoTitle.style.transform = `translateX(0)`;
  for (let index = 0; index < darkodes.length; index++) {
    const element = darkodes[index];
    number = index * 0.3;

    element.style.transform = `translateX(0)`;
    element.style.transition = `all 1.2s ${number}s cubic-bezier(0.25, 0, 0, 1)`;
  }
});

morphism.addEventListener("mouseenter", (e) => {
  morphism.style.transform = `scale(1)`;
  morphism.style.marginLeft = `2vw`;
  darko.style.width = `30vw`;
  subtitle.style.color = `white`;
  blackbar[1].style.background = `white`;
  blackbar[0].style.background = `white`;
  dzSub.style.filter = `drop-shadow(-0.1vw 0.1vw 0.3vw #00000085)`;

  morphTitle.style.transform = `translateX(22.3vw)`;

  for (let index = 0; index < morphdes.length; index++) {
    const element = morphdes[index];
    number = index * 0.2 + 0.1;

    element.style.transform = `translateX(24.9vw)`;
    element.style.transition = `all 1.2s ${number}s cubic-bezier(0.2, 0, 0, 1)`;
  }
});

morphism.addEventListener("mouseleave", (e) => {
  morphism.style.transform = `scale(0.7)`;
  morphism.style.marginLeft = `-17vw`;
  darko.style.width = `56vw`;
  blackbar[1].style.background = `#292929`;
  blackbar[0].style.background = `#292929`;
  subtitle.style.color = `#292929`;
  dzSub.style.filter = `none`;

  morphTitle.style.transform = `translateX(0)`;

  for (let index = 0; index < morphdes.length; index++) {
    const element = morphdes[index];
    number = index * 0.2 + 0.1;

    element.style.transform = `translateX(0)`;
    element.style.transition = `all 1.2s ${number}s cubic-bezier(0.2, 0, 0, 1)`;
  }
});

// sec6 Wave React
const sec6 = document.querySelector(".section6");
const wave = document.querySelectorAll(".wav-1");
const waveRec = document.querySelector("#wave-decor");
const waveValilate = document.querySelector("#text-group");

var waveValilate2 = 0;

window.addEventListener("scroll", (e) => {
  waveValilate2 =
    waveValilate.getBoundingClientRect().top +
    waveValilate.getBoundingClientRect().height / 2;
  console.log(waveValilate2);
  if (waveValilate2 > 0) {
    sec6.addEventListener("mousemove", (e) => {
      var scrollX = window.scrollX;
      var scrollY = window.scrollY;

      var ValidateLenght =
        waveValilate.getBoundingClientRect().top +
        waveValilate.getBoundingClientRect().height / 2;

      const middleLeft =
        waveRec.getBoundingClientRect().x + waveRec.clientWidth / 2 + scrollX;
      // const middleTop = waveRec.clientTop + waveRec.clientHeight / 2 + scrollY;
      const middleTop =
        waveRec.getBoundingClientRect().y + waveRec.clientHeight / 2 + scrollY;

      var distanceX = e.pageX - middleLeft;
      var distanceY = e.pageY - middleTop;

      var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      for (let index = 0; index < wave.length; index++) {
        if (ValidateLenght < 0) {
          break;
        }
        const element = wave[index];

        var reverse = Math.abs(wave.length - index);
        var Halfreverse = wave.length / 2 - index;

        scale = 0.005 + index * 0.005;
        offset = 1 + (index - wave.lenght / 2) * 0.1;

        scaleAmount = 1 - scale * (distance / 244);
        shiftX = distanceX * 0.25 * (Halfreverse / wave.length);
        shiftY = distanceY * 0.25 * (Halfreverse / wave.length);

        element.style.transition = `all 0.33s 0s ease-out`;
        element.style.transform = `scale(${scaleAmount}) translateX(${shiftX}px) translateY(${shiftY}px)`;
      }
    });
  }
});

sec6.addEventListener("mouseleave", (e) => {
  for (let index = 0; index < wave.length; index++) {
    const element = wave[index];

    element.style.transform = `scale(1) translateX(0px) translateY(0px)`;
    element.style.transition = `all 1.5s 0s cubic-bezier(0.25, 0, 0, 1)`;
  }
});

// design.illus - Validate and React
sec6y = sec6.getBoundingClientRect().top;
sec6y2 = sec6.getBoundingClientRect().top + sec6.getBoundingClientRect().height;

if (sec6y < 0 && sec6y > sec6y2) {
  var timer = setInterval(onTick, 10);
  var offsetval = 0;

  const velocity = 4;

  function onTick() {
    const mnt1 = document.querySelector("#mve1");
    const mnt2 = document.querySelector("#mve2");

    offsetval += velocity;

    mnt1.style.strokeDashoffset = `${offsetval / 2}px`;
    mnt2.style.strokeDashoffset = `${offsetval / 2}px`;
  }
} else {
  offsetval = null;
  clearInterval(timer);
}

// Tech Particles - section6

const TechPaticles = document.querySelectorAll("#tech-svg .tch-1");
const TechSensor = document.querySelector("#svgform2");

let mouse = {
  x: null,
  y: null,
  radius: 40,
};

TechSensor.addEventListener("mousemove", (e) => {
  mouse.x = e.pageX;
  mouse.y = e.pageY;

  // var timeValue = 0;
  // var timeFuntion = setInterval(LoopFreq, 10);
  // function LoopFreq() {

  for (let index = 0; index < TechPaticles.length; index++) {
    const element = TechPaticles[index];

    var rect = element.getBoundingClientRect();

    var particles = {
      x: rect.left + rect.width / 2 + window.scrollX,
      y: rect.top + element.clientHeight / 2 + window.scrollY,
    };

    let distance = {
      x: mouse.x - particles.x,
      y: mouse.y - particles.y,

      both: Math.sqrt(
        (mouse.x - particles.x) * (mouse.x - particles.x) +
          (mouse.y - particles.y) * (mouse.y - particles.y)
      ),
    };

    // validate and react

    let offset = {
      x: 0,
      y: 0,

      max: mouse.radius,

      velocity: Math.random() * 2 + 0.5,
    };

    if (distance.both < mouse.radius) {
      offset.x = (offset.max * distance.x) / distance.both;
      offset.y = (offset.max * distance.y) / distance.both;

      // react

      element.style.transform = `translateX(${-offset.x}px) translateY(${-offset.y}px)`;

      element.style.transition = `all ${offset.velocity}s ease-out`;
    } else {
      element.style.transform = `translateX(0px) translateY(0px)`;
    }
    if (index === TechPaticles.length) {
      break;
    }
  }
  // }
  // console.log(TechPaticles);
});

// section7 - Submit Event React

const submitBTN = document.querySelector(".submit-button");
const submitBOX = document.querySelector("#submit-confirm-box");
const submitShape = document.querySelector("#submit-confirm");

submitBTN.addEventListener("mousedown", (e) => {
  submitBOX.style.width = `100%`;
  submitBOX.style.marginLeft = `1vw`;

  submitShape.style.strokeDashoffset = `0`;
});

// Top Navigation Panel React

const topNAV = document.querySelector(".NAV-Elements");
const blurMask = document.querySelector("#blur-mask");

document.addEventListener("scroll", function (e) {
  if (window.scrollY > topNAV.offsetTop) {
    topNAV.style.transition = `all 1.5s 0s cubic-bezier(0.25, 0, 0, 1), margin-top 0s linear`;
    topNAV.style.position = `fixed`;
    topNAV.style.paddingLeft = `5vw`;
    topNAV.style.paddingRight = `5vw`;
    topNAV.style.marginTop = `0`;
    topNAV.style.background = `#ffffff31`;
    blurMask.style.opacity = `100%`;
  } else {
    topNAV.style.transition = `all 1.5s 0s cubic-bezier(0.25, 0, 0, 1), margin-top 0.3s cubic-bezier(0.25, 0, 0, 1)`;
    topNAV.style.position = `absolute`;
    topNAV.style.paddingLeft = `17vw`;
    topNAV.style.paddingRight = `17vw`;
    topNAV.style.marginTop = `12vh`;
    topNAV.style.background = `#ffffff00`;
    blurMask.style.opacity = `0%`;
  }
});

// Side Navigation Panel React

const NAVButton = document.querySelector(".POP-up");
const SideNav = document.querySelector(".menu-section");
const docbdy = document.querySelector("body");
const MenuShadow = document.querySelector(".menu-layout");
const footer = document.querySelector(".footer");
const footerChild = document.querySelectorAll("#footer-col")[2];
const copyright = document.querySelector("#copyright");
const decor4 = document.querySelector("#decor4");
const decor2 = document.querySelector(".decor-img2");
const decor3 = document.querySelector(".img-decor3");
const buttonLine = document.querySelectorAll(".button-line");
const menuElement = document.querySelectorAll("#nav-place");

var NavValidate = false;

NAVButton.addEventListener("click", (e) => {
  NavValidate = !NavValidate;
  if (window.scrollY > topNAV.offsetTop && NavValidate == true) {
    topNAV.style.paddingLeft = `17vw`;
    topNAV.style.paddingRight = `17vw`;
  }
  if (window.scrollY > topNAV.offsetTop && NavValidate == false) {
    topNAV.style.paddingLeft = `5vw`;
    topNAV.style.paddingRight = `5vw`;
  }

  if (NavValidate == true) {
    SideNav.style.right = `0`;
    docbdy.style.right = `11vw`;
    TagBox.style.marginLeft = `22vw`;
    MenuShadow.style.boxShadow = `-1vw 0vw 2vw #0000004d`;
    footer.style.left = `11vw`;
    footerChild.style.width = `25%`;
    footerChild.style.marginRight = `25%`;
    copyright.style.marginRight = `25%`;
    decor4.style.left = `5vw`;
    decor2.style.transform = `translateX(5vw)`;
    decor3.style.transform = `translateX(5vw) rotate(-30deg) scale(0.8)`;
    buttonLine[0].style.transform = `translateY(0.72vw) rotate(45deg)`;
    buttonLine[1].style.transform = `translateY(-0.72vw) rotate(-45deg)`;

    let loopValidate = 0;
    for (let index = 0; index < menuElement.length; index++) {
      const element = menuElement[index];
      loopValidate = index;

      element.style.transform = `translateX(0)`;
      element.style.transition = `all 1.3s ${0.1 * index}s
      cubic-bezier(0.25, 0, 0, 1)`;

      if (loopValidate == menuElement.length) {
        break;
      }
      if (loopValidate == 0) {
        continue;
      }
    }
  } else {
    SideNav.style.right = `-20vw`;
    docbdy.style.right = `0`;
    TagBox.style.marginLeft = `0`;
    MenuShadow.style.boxShadow = `0vw 0vw 0vw #0000004d`;
    footer.style.left = `0`;
    footerChild.style.width = `50%`;
    footerChild.style.marginRight = `0`;
    copyright.style.marginRight = `0`;
    decor4.style.left = `0`;
    decor2.style.transform = `translateX(0)`;
    decor3.style.transform = `translateX(0) rotate(0) scale(1)`;
    buttonLine[0].style.transform = `translateY(0) rotate(0)`;
    buttonLine[1].style.transform = `translateY(0) rotate(0)`;

    let loopValidate = 0;
    for (let index = 0; index < menuElement.length; index++) {
      const element = menuElement[index];
      loopValidate = index;

      element.style.transform = `translateX(20vw)`;
      if (loopValidate == menuElement.length) {
        break;
      }
      if (loopValidate == 0) {
        continue;
      }
    }
  }
});

// React Bug Resolve
const sensorEmail = document.querySelector(".section7");
const copyright2 = document.querySelector("#nav-copyright");

document.addEventListener("scroll", function (e) {
  if (window.scrollY > topNAV.offsetTop && NavValidate == true) {
    topNAV.style.paddingLeft = `17vw`;
    topNAV.style.paddingRight = `17vw`;
  }
  if (window.scrollY < topNAV.offsetTop && NavValidate == true) {
    topNAV.style.paddingLeft = `5vw`;
    topNAV.style.paddingRight = `5vw`;
  }
  if (window.scrollY > sensorEmail.offsetTop) {
    copyright2.style.opacity = `0%`;
  } else {
    copyright2.style.opacity = `100%`;
  }

  // Sec6 Bug Resolve

  var sec6Validate1 = sec6.getBoundingClientRect().top;
  var sec6Validate2 =
    sec6.getClientRects().top + sec6.getBoundingClientRect().height;

  sec6.addEventListener("mouseenter", (e) => {
    TagBox.style.display = `none`;
  });

  sec6.addEventListener("mouseleave", (e) => {
    TagBox.style.display = `flex`;
    TagBox.style.cursor = `none`;
  });
});

// Follow Along Cursor React and Parallax Decoration

const TagContent = document.querySelector("#tag-contents");
const CurPointer = document.querySelector("#border");

document.addEventListener("mousemove", (e) => {
  // Mouse Follow
  let fixX = e.pageX - window.scrollX - window.innerWidth / 2;
  let fixY = e.pageY - window.scrollY - TagBox.clientHeight / 2;

  TagBox.style.transform = `translateY(${fixY}px) translateX(${fixX}px)`;
});
document.addEventListener("mouseenter", (e) => {
  TagBox.style.opacity = `100%`;
});
document.addEventListener("mouseleave", (e) => {
  TagBox.style.opacity = `0%`;
});
// // Parallax Decoration And Animate Onscroll
// Parallax Items

const decorPic1 = document.querySelector(".decor-img1");
const decorPic2 = document.querySelector(".decor-img2");

const decorCol2 = document.querySelector(".decor1");

// Level Bars Item
const skillTable = document.querySelector("#gr3");
const LevelItem = document.querySelectorAll(".appitem");

document.addEventListener("scroll", (e) => {
  // Parallax
  let clampSensor = document.querySelector(".section3").getBoundingClientRect();

  if (clampSensor.top > 0) {
    decorPic1.style.transform = `translateY(${window.scrollY / 3}px) 
    rotate(${window.scrollY / 30}deg)`;
    decorPic2.style.marginTop = `${window.scrollY / 8}px`;
  }

  // // Level Bars
  let LevelBarSensor =
    skillTable.getBoundingClientRect().top -
    window.innerHeight +
    (skillTable.getBoundingClientRect().height / 9) * 5;

  let LevelBarSensor2 =
    skillTable.getBoundingClientRect().top -
    window.innerHeight -
    (skillTable.getBoundingClientRect().height / 9) * 5;

  if (LevelBarSensor2 > 0) {
    for (let index = 0; index < LevelItem.length; index++) {
      const element = LevelItem[index];

      element.style.width = `70%`;

      if (index == LevelItem.length) {
        break;
      }
    }
  }
  if (LevelBarSensor < 0) {
    for (let index = 0; index < LevelItem.length; index++) {
      const element = LevelItem[index];

      element.style.width = `100%`;
      element.style.transition = `width 2s ${0.1 * index}s 
      cubic-bezier(0.25, 0, 0, 1)`;

      if (index == LevelItem.length) {
        break;
      }
    }
  }
});

// // // Things Needs

function NormalPointerIn() {
  CurPointer.style.opacity = `100%`;
  CurPointer.style.width = `300%`;
  CurPointer.style.height = `300%`;
}
function TextPointerIn() {
  CurPointer.style.opacity = `100%`;
  CurPointer.style.width = `200%`;
  CurPointer.style.height = `200%`;
}

function NormalPointerOut() {
  CurPointer.style.opacity = `0`;
  CurPointer.style.width = `0`;
  CurPointer.style.height = `0`;
}

// // Behance
let Behance = {
  SVG1: document.querySelector(".behance-svg"),
  SVG2: document.querySelector(".behance-svg2"),
};

Behance.SVG1.addEventListener("mouseenter", (e) => {
  TagContent.innerHTML = "Behance";
  TagContent.style.width = `6vw`;
  TagContent.style.height = `2vw`;
  TagContent.style.opacity = `100%`;
  TagContent.style.letterSpacing = `0.01vw`;

  TextPointerIn();
});

Behance.SVG1.addEventListener("mouseleave", (e) => {
  TagContent.style.width = `0`;
  TagContent.innerHTML = "";
  TagContent.style.height = `0`;
  TagContent.style.opacity = `0%`;
  TagContent.style.letterSpacing = `-0.5vw`;

  NormalPointerOut();
});

Behance.SVG2.addEventListener("mouseenter", (e) => {
  TagContent.innerHTML = "Behance";
  TagContent.style.width = `6vw`;
  TagContent.style.height = `2vw`;
  TagContent.style.opacity = `100%`;
  TagContent.style.letterSpacing = `0.01vw`;
  TagContent.style.color = `#ffffff`;

  TextPointerIn();
});

Behance.SVG2.addEventListener("mouseleave", (e) => {
  TagContent.style.width = `0`;
  TagContent.innerHTML = "";
  TagContent.style.height = `0`;
  TagContent.style.opacity = `0%`;
  TagContent.style.letterSpacing = `-0.5vw`;
  TagContent.style.color = `#292929`;

  NormalPointerOut();
});

// // Artstation
let Artstation = {
  SVG1: document.querySelector(".artstation-svg"),
  SVG2: document.querySelector(".artstation-svg2"),
};

Artstation.SVG1.addEventListener("mouseenter", (e) => {
  TagContent.innerHTML = "Artstation";
  TagContent.style.width = `7vw`;
  TagContent.style.height = `2vw`;
  TagContent.style.opacity = `100%`;
  TagContent.style.letterSpacing = `0.01vw`;

  TextPointerIn();
});

Artstation.SVG1.addEventListener("mouseleave", (e) => {
  TagContent.style.width = `0`;
  TagContent.innerHTML = "";
  TagContent.style.height = `0`;
  TagContent.style.opacity = `0%`;
  TagContent.style.letterSpacing = `-0.5vw`;

  NormalPointerOut();
});

Artstation.SVG2.addEventListener("mouseenter", (e) => {
  TagContent.innerHTML = "Artstation";
  TagContent.style.width = `7vw`;
  TagContent.style.height = `2vw`;
  TagContent.style.opacity = `100%`;
  TagContent.style.letterSpacing = `0.01vw`;
  TagContent.style.color = `#ffffff`;

  TextPointerIn();
});

Artstation.SVG2.addEventListener("mouseleave", (e) => {
  TagContent.style.width = `0`;
  TagContent.innerHTML = "";
  TagContent.style.height = `0`;
  TagContent.style.opacity = `0%`;
  TagContent.style.letterSpacing = `-0.5vw`;
  TagContent.style.color = `#292929`;

  NormalPointerOut();
});

// // Fb
let Fb = {
  SVG1: document.querySelectorAll(".fb-svg")[0],
  SVG2: document.querySelectorAll(".fb-svg")[1],
};

Fb.SVG1.addEventListener("mouseenter", (e) => {
  TagContent.innerHTML = "Facebook";
  TagContent.style.width = `7vw`;
  TagContent.style.height = `2vw`;
  TagContent.style.opacity = `100%`;
  TagContent.style.letterSpacing = `0.01vw`;

  TextPointerIn();
});

Fb.SVG1.addEventListener("mouseleave", (e) => {
  TagContent.style.width = `0`;
  TagContent.innerHTML = "";
  TagContent.style.height = `0`;
  TagContent.style.opacity = `0%`;
  TagContent.style.letterSpacing = `-0.5vw`;

  NormalPointerOut();
});

Fb.SVG2.addEventListener("mouseenter", (e) => {
  TagContent.innerHTML = "Facebook";
  TagContent.style.width = `7vw`;
  TagContent.style.height = `2vw`;
  TagContent.style.opacity = `100%`;
  TagContent.style.letterSpacing = `0.01vw`;
  TagContent.style.color = `#ffffff`;

  TextPointerIn();
});

Fb.SVG2.addEventListener("mouseleave", (e) => {
  TagContent.style.width = `0`;
  TagContent.innerHTML = "";
  TagContent.style.height = `0`;
  TagContent.style.opacity = `0%`;
  TagContent.style.letterSpacing = `-0.5vw`;
  TagContent.style.color = `#292929`;

  NormalPointerOut();
});

// // "See My Project" The Button

const prjButton = document.querySelector(".prj-button");

prjButton.addEventListener("mouseenter", (e) => {
  NormalPointerIn();
});

prjButton.addEventListener("mouseleave", (e) => {
  NormalPointerOut();
});

// // See More Button

const MoreButton1 = document.querySelectorAll(".see-more-button")[0];
const MoreButton2 = document.querySelector(".see-more-button2");
const MoreButton3 = document.querySelectorAll(".see-more-button")[1];
const MoreButton4 = document.querySelectorAll(".see-more-button")[2];

MoreButton1.addEventListener("mouseenter", (e) => {
  NormalPointerIn();
});
MoreButton1.addEventListener("mouseleave", (e) => {
  NormalPointerOut();
});

MoreButton2.addEventListener("mouseenter", (e) => {
  NormalPointerIn();
});
MoreButton2.addEventListener("mouseleave", (e) => {
  NormalPointerOut();
});

MoreButton3.addEventListener("mouseenter", (e) => {
  NormalPointerIn();
});
MoreButton3.addEventListener("mouseleave", (e) => {
  NormalPointerOut();
});

MoreButton4.addEventListener("mouseenter", (e) => {
  NormalPointerIn();
});
MoreButton4.addEventListener("mouseleave", (e) => {
  NormalPointerOut();
});

// Read More Text

const MoreText1 = document.querySelectorAll(".mrsB-readmore")[0];
const MoreText2 = document.querySelectorAll(".mrsB-readmore")[1];
const MoreText3 = document.querySelectorAll(".mrsB-readmore")[2];
const MoreText4 = document.querySelectorAll(".mrsB-readmore")[3];

MoreText1.addEventListener("mouseenter", (e) => {
  NormalPointerIn();
});
MoreText1.addEventListener("mouseleave", (e) => {
  NormalPointerOut();
});

MoreText2.addEventListener("mouseenter", (e) => {
  NormalPointerIn();
});
MoreText2.addEventListener("mouseleave", (e) => {
  NormalPointerOut();
});

MoreText3.addEventListener("mouseenter", (e) => {
  NormalPointerIn();
});
MoreText3.addEventListener("mouseleave", (e) => {
  NormalPointerOut();
});

MoreText4.addEventListener("mouseenter", (e) => {
  NormalPointerIn();
});
MoreText4.addEventListener("mouseleave", (e) => {
  NormalPointerOut();
});

// About Me Cursor

const EmailText = document.querySelector("#Email");
const textInput = document.querySelectorAll(".name-input");

EmailText.addEventListener("mouseenter", (e) => {
  NormalPointerIn();
});
EmailText.addEventListener("mouseleave", (e) => {
  NormalPointerOut();
});

submitBTN.addEventListener("mouseenter", (e) => {
  NormalPointerIn();
});
submitBTN.addEventListener("mouseleave", (e) => {
  NormalPointerOut();
});

for (let index = 0; index < textInput.length; index++) {
  const element = textInput[index];

  element.addEventListener("mouseenter", (e) => {
    NormalPointerIn();
  });
  element.addEventListener("mouseleave", (e) => {
    NormalPointerOut();
  });
}

// Header and Footer Cursor Belike
const footerLink = document.querySelectorAll(
  ".footer-content span, .NAV-Elements a"
);

for (let index = 0; index < footerLink.length; index++) {
  const element = footerLink[index];

  element.addEventListener("mouseenter", (e) => {
    NormalPointerIn();
  });
  element.addEventListener("mouseleave", (e) => {
    NormalPointerOut();
  });
}

// NAV Cursor Belike

const SideNavElement = document.querySelectorAll("#nav-place");

for (let index = 0; index < SideNavElement.length; index++) {
  const element = SideNavElement[index];

  element.addEventListener("mouseenter", (e) => {
    NormalPointerIn();
  });
  element.addEventListener("mouseleave", (e) => {
    NormalPointerOut();
  });
}

NAVButton.addEventListener("mouseenter", (e) => {
  NormalPointerIn();
});
NAVButton.addEventListener("mouseleave", (e) => {
  NormalPointerOut();
});

// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
