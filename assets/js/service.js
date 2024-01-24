const textDiv = document.getElementById("webline");

if (textDiv) {
  function line() {
    var sizeWidth = Math.random() * 12;
    var duration = Math.random() * 3;
    const textDiv = document.getElementById("webline");
    var e = document.createElement("div");
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
    var sizeWidth = Math.random() * 12;
    var duration = Math.random() * 3;
    const textDivs = document.getElementById("weblines");
    var e = document.createElement("div");
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
}
