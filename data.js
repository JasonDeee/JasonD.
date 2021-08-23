// Hello There. Just A Place For Transfering Some data User request.
// Have A Good Day!

// Requests Data Storage

const ContactForm = document.querySelector("#Social_Form");

const NameInput = document.querySelector("#name input");
const EmailInput = document.querySelector("#mail input");
const SubjectInput = document.querySelector("#subject input");
const MessageInput = document.querySelector("#message textarea");

const thankPopUp = document.querySelector(".thank_Pop");
const thankOverlay = document.querySelector("#black_matte");
const Pop_main = document.querySelector("#Pop_main");
const checked_shape = document.querySelector("#checked_shape");
const checked_circle = document.querySelector("#checked_circle");

thankPopUp.addEventListener("click", (e) => {
  Pop_main.style.transform = `scale(1)`;
  Pop_main.style.animation = `AppreciateClose 0.8s cubic-bezier(1, 0, 0, 0.25) 0.3s forwards`;
  thankOverlay.style.opacity = `0`;

  var thankTimeOut = setTimeout(function () {
    thankPopUp.style.display = `none`;
    clearTimeout(thankTimeOut);
  }, 1200);
});

ContactForm.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();

    submitBOX.style.width = `100%`;
    submitBOX.style.marginLeft = `1vw`;
    submitShape.style.strokeDashoffset = `0`;

    Pop_main.style.animation = `none`;
    thankPopUp.style.display = `flex`;
    thankOverlay.style.opacity = `100%`;
    checked_shape.style.animation = `Appreciate 0.8s cubic-bezier(0.25, 0, 0, 1) 0.3s forwards`;
    submitShape2.style.animation = `AppreciateShape 1.5s cubic-bezier(0.25, 0, 0, 1) 0.8s forwards`;

    // Get Current Values
    let Name = NameInput.value;
    let Email = EmailInput.value;
    let Subject = SubjectInput.value;
    let Message = MessageInput.value;

    // Init Data Values
    let dataEntry = {
      "entry.326690724": Name,
      "entry.210917691": Email,
      "entry.837615816": Subject,
      "entry.906113398": Message,
    };

    let dataEntryParams = new URLSearchParams(dataEntry);
    let DataEntryString = dataEntryParams.toString();

    // Push Data Values
    var dataPush = new XMLHttpRequest();
    dataPush.open(
      "POST",
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdups-X9r8xWllK8FRltZd1jG1R6OO7REGHAL6CUN5Bue7tww/formResponse",
      true
    );

    dataPush.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );

    console.log(DataEntryString);
    dataPush.send(DataEntryString);
  },
  { once: true }
);
