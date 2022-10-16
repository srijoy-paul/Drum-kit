// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
var audio = [];
for (let ind = 0; ind < 7; ind++) {
  audio[ind] = new Audio("./sounds/sound-" + (ind + 1) + ".mp3");
}

// document
//   .getElementsByClassName("drum")[0]
//   .addEventListener("click", function (event) {
//     audio[0] = new Audio("./sounds/crash.mp3");
//     audio[0].play();
//     buttonAnima(this.innerHTML);
//   });
// document
//   .getElementsByClassName("drum")[1]
//   .addEventListener("click", function () {
//     audio[1] = new Audio("sounds/kick-bass.mp3");
//     audio[1].play();
//     buttonAnima(this.innerHTML);
//   });
// document
//   .getElementsByClassName("drum")[2]
//   .addEventListener("click", function () {
//     audio[2] = new Audio("sounds/snare.mp3");
//     audio[2].play();
//     buttonAnima(this.innerHTML);
//   });

for (let i = 0, index = 1; i < 7; i++, index++) {
  document
    .getElementsByClassName("drum")
    [i].addEventListener("click", function () {
      console.log(this.textContent);
      buttonAnima(this.textContent);
      audio[i].play();
    });
}

document.addEventListener("keypress", function (e) {
  buttonAnima(e.key);
  switch (e.key) {
    case "w":
      audio[0].play();
      break;
    case "a":
      audio[1].play();
      break;
    case "s":
      audio[2].play();
      break;
    case "d":
      audio[3].play();
      break;
    case "j":
      audio[4].play();
      break;
    case "k":
      audio[5].play();
      break;
    case "l":
      audio[6].play();
      break;
  }
});

function buttonAnima(clicked) {
  document.getElementsByClassName(clicked)[0].classList.add("pressed");
  setTimeout(() => {
    document.getElementsByClassName(clicked)[0].classList.remove("pressed");
  }, 150);
}
