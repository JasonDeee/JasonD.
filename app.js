// "Project - section2
var body = document.querySelector("body");
var sec2 = document.querySelector(".section2");
var ProjectBox = document.querySelector(".section2-box");
var MRSB = document.querySelector(".mrsB");
var MRSBs2 = document.querySelector(".mrsB2");
var MRSBs3 = document.querySelector(".mrsB3");
var MRSBs4 = document.querySelector(".mrsB4");

var MRBtag = document.querySelector(".mrsB-tag");
var fkgbutton = document.querySelector(".see-more-button");
var subconnect = document.querySelector(".sub-connector");
var sectionconect = document.querySelector(".section-connector");
var MRBname = document.querySelector(".mrsB-title");

ProjectBox.addEventListener("mousemove", (e) => {
  var scrolledY = window.scrollY;
  var scrolledX = window.scrollX;
  var rect = ProjectBox.getBoundingClientRect();
  let middleLeft = rect.left + rect.width / 2 + scrolledX;
  let middleTop = rect.top + rect.height / 2 + scrolledY;
  let xAxis = (middleLeft - e.pageX) / (e.pageX / 8);
  let yAxis = (middleTop - e.pageY) / (e.pageY / 12);
  let rad = Math.atan2(e.pageY - middleTop, e.pageX - middleLeft);
  let angle = (rad * 180) / Math.PI + 270;
  let glareX = e.pageX - (rect.left + scrolledX);
  let glareY = e.pageY - (rect.top + scrolledY);

  // ProjectBox.style.transform = `rotateY(${xAxis + 10}deg) rotateX(${
  //   yAxis + 5
  // }deg)`;
  sec2.style.transform = `rotateY(${xAxis + 3}deg) rotateX(${yAxis + 5}deg)`;
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
  // MRSB.style.boxShadow = `-0.3vw 0.3vw 1vw 0 #00000042`;
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

// section2
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

katunVideo.addEventListener("mousedown", (e) => {
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

sec6.addEventListener("mousemove", (e) => {
  var scrollX = window.scrollX;
  var scrollY = window.scrollY;

  const middleLeft =
    waveRec.getBoundingClientRect().x + waveRec.clientWidth / 2 + scrollX;
  // const middleTop = waveRec.clientTop + waveRec.clientHeight / 2 + scrollY;
  const middleTop =
    waveRec.getBoundingClientRect().y + waveRec.clientHeight / 2 + scrollY;

  var distanceX = e.pageX - middleLeft;
  var distanceY = e.pageY - middleTop;

  var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

  for (let index = 0; index < wave.length; index++) {
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

sec6.addEventListener("mouseleave", (e) => {
  for (let index = 0; index < wave.length; index++) {
    const element = wave[index];

    element.style.transform = `scale(1) translateX(0px) translateY(0px)`;
    element.style.transition = `all 1.5s 0s cubic-bezier(0.25, 0, 0, 1)`;
  }
});

// design.illus - Validate and React
sec6y = sec6.getBoundingClientRect().top;

if (sec6y < 0) {
  var timer = setInterval(onTick, 50);
  var offsetval = 0;

  const velocity = 4;

  function onTick() {
    const mnt1 = document.querySelector("#mve1");
    const mnt2 = document.querySelector("#mve2");

    offsetval += velocity;

    mnt1.style.strokeDashoffset = `${offsetval}px`;
    mnt2.style.strokeDashoffset = `${offsetval}px`;
  }
}

// Tech Particles - section6

const TechPaticles = document.querySelectorAll(".tch-1");
const TechSensor = document.querySelector("#des-group2");

let mouse = {
  x: null,
  y: null,
  radius: 45,
};

TechSensor.addEventListener("mousemove", (e) => {
  mouse.x = e.pageX;
  mouse.y = e.pageY;

  for (let index = 0; index < TechPaticles.length; index++) {
    const element = TechPaticles[index];

    const rect = element.getBoundingClientRect();

    const particles = {
      x: rect.x + rect.width / 2 + window.scrollX,
      y: rect.y + element.clientHeight / 2 + window.scrollY,
    };

    var distance = {
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
    }

    if (distance.both > mouse.radius) {
      offset.x = 0;
      offset.y = 0;
    }

    // react

    element.style.transform = `translateX(${offset.x}px) translateY(${
      offset.y / 3
    }px)`;

    element.style.transition = `all ${offset.velocity}s ease-out`;
  }

  // console.log(TechPaticles);
});
