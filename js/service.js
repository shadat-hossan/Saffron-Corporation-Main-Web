function line() {
  let sizeWidth = Math.random() * 12;
  let duration = Math.random() * 3;
  let textDiv = document.querySelector(".webline");
  let e = document.createElement("div");
  e.setAttribute("class", "circle");
  textDiv.appendChild(e);
  e.style.width = 2 + sizeWidth + "px";
  e.style.left = Math.random() * +innerWidth + "px";
  e.style.animationDirection = 2 + duration + "s";

  setTimeout(function () {
    textDiv.removeChild(e);
  }, 8000);
}

setInterval(function () {
  line();
}, 100);

function lineLeft() {
  let sizeWidth = Math.random() * 12;
  let duration = Math.random() * 3;
  let textDivs = document.querySelector(".weblines");
  let e = document.createElement("div");
  e.setAttribute("class", "circle");
  textDivs.appendChild(e);
  e.style.width = 2 + sizeWidth + "px";
  e.style.left = Math.random() * +innerWidth + "px";
  e.style.animationDirection = 2 + duration + "s";

  setTimeout(function () {
    textDivs.removeChild(e);
  }, 8000);
}

setInterval(function () {
  lineLeft();
}, 100);
