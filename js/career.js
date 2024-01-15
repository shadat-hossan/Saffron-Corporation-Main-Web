// Drime Image Animation
const singalItem = document.querySelectorAll(".singalItem");

singalItem.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiverClass();
    item.classList.add("active");
  });
});

function removeActiverClass() {
  singalItem.forEach((item) => {
    item.classList.remove("active");
  });
}

// Progress Bar

var progressBar = {
  Trusted: 90,
  "Many Partners": 70,
  Professional: 80,
};

const key = Object.keys(progressBar);
const valu = Object.values(progressBar);

var lineProgresBar = document.querySelector(".lineProgresBar");
var progresPer = document.querySelector(".progres-per");
var counterValu = document.querySelector("#counterValu");

function progres(key, valu) {
  var keyMap = key.map((k) => {
    return k;
  });

  var valuMap = valu.map((v) => {
    return v;
  });
  for (let i = 0; i <= valu.length - 1; i++) {
    lineProgresBar.innerHTML += `<div class="lineProgresBarContainer">
    <div class="progres-box">
      <div class="titleAndCounter">
        <span class="title">${keyMap[i]}</span> 
        <span id="counterValu">${valuMap[i]} %</span>
      </div>

      <div class="progres-couont-bar">
        <span class="progres-per" style="width: ${valuMap[i]}%" >
        </span>
      </div>
    </div>
  </div>`;
  }
}

progres(key, valu);
