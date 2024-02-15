const activePage = window.location.pathname;
var item = document.querySelectorAll(".navbar-container .nav-item a");

item.forEach((link) => {
  if (link.pathname === activePage) {
    link.classList.add("active");
  }
});

//menu responsive click
document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".navbar-menu");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});

// menu scroll effect
document.addEventListener("scroll", function () {
  var navbarContainer = document.querySelector(".navbar-container");
  var logo = document.querySelector(".slogo");
  var menuItems = document.querySelectorAll(
    ".navbar-container .navbar-menu ul li a"
  );
  if (document.documentElement.scrollTop > 80) {
    navbarContainer.classList.add("shrink");
    logo.classList.add("logoShirnk");
    menuItems.forEach(function (menuItem) {
      menuItem.classList.add("menuItemsAllA");
    });
  } else {
    navbarContainer.classList.remove("shrink");
    logo.classList.remove("logoShirnk");
    menuItems.forEach(function (menuItem) {
      menuItem.classList.remove("menuItemsAllA");
    });
  }
});

//

const storyReadMor = document.querySelector(".storyReadMor");
const hiddenText = document.querySelector("#hiddenText");
const dot = document.querySelector("#dot");
if (storyReadMor) {
  storyReadMor.addEventListener("click", () => {
    if (dot.style.display != "none") {
      hiddenText.style.display = "inline";
      dot.style.display = "none";
      storyReadMorImage.style.transform = "rotate(90deg)";
      storyReadMor.innerHTML = `Read Less <img
            src="assets/img/logo/arrayUp.svg"
            alt="Read More Icon"
            id="storyReadMorImage"
          />`;
    } else {
      hiddenText.style.display = "none";
      dot.style.display = "inline";
      storyReadMorImage.style.transform = "rotate(0deg)";
      storyReadMor.innerHTML = `Read More <img
            src="assets/img/logo/arrayDown.svg"
            alt="Read More Icon"
            id="storyReadMorImage"
          />`;
    }
  });
}

// =-================

const slidePage = document.querySelector(".slidePage");
const fristNextBtn = document.querySelector(".nextBtn");
const priviousBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const priviousBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const priviousBtnFor = document.querySelector(".prev-3");
const SubmitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".stap p");
const progressCheck = document.querySelectorAll(".stap .check");
const bullet = document.querySelectorAll(".stap .bullet");

let max = 4;
let curreant = 1;

fristNextBtn.addEventListener("click", function () {
  slidePage.style.marginLeft = "-25%";
  bullet[curreant - 1].classList.add("activerStap");
  progressText[curreant - 1].classList.add("activerStap");
  progressCheck[curreant - 1].classList.add("activerStap");
  curreant += 1;
});
nextBtnSec.addEventListener("click", function () {
  slidePage.style.marginLeft = "-50%";
  bullet[curreant - 1].classList.add("activerStap");
  progressText[curreant - 1].classList.add("activerStap");
  progressCheck[curreant - 1].classList.add("activerStap");
  curreant += 1;
});
nextBtnThird.addEventListener("click", function () {
  slidePage.style.marginLeft = "-75%";
  bullet[curreant - 1].classList.add("activerStap");
  progressText[curreant - 1].classList.add("activerStap");
  progressCheck[curreant - 1].classList.add("activerStap");
  curreant += 1;
});

SubmitBtn.addEventListener("click", function () {
  bullet[curreant - 1].classList.add("activerStap");
  progressText[curreant - 1].classList.add("activerStap");
  progressCheck[curreant - 1].classList.add("activerStap");
  curreant += 1;
  setTimeout(function () {
    alert("Think You");
    location.reload();
  }, 800);
});

priviousBtnSec.addEventListener("click", function () {
  slidePage.style.marginLeft = "-0%";
  bullet[curreant - 2].classList.remove("activerStap");
  progressText[curreant - 2].classList.remove("activerStap");
  progressCheck[curreant - 2].classList.remove("activerStap");
  curreant -= 1;
});
priviousBtnThird.addEventListener("click", function () {
  slidePage.style.marginLeft = "-25%";
  bullet[curreant - 2].classList.remove("activerStap");
  progressText[curreant - 2].classList.remove("activerStap");
  progressCheck[curreant - 2].classList.remove("activerStap");
  curreant -= 1;
});
priviousBtnFor.addEventListener("click", function () {
  slidePage.style.marginLeft = "-50%";
  bullet[curreant - 2].classList.remove("activerStap");
  progressText[curreant - 2].classList.remove("activerStap");
  progressCheck[curreant - 2].classList.remove("activerStap");
  curreant -= 1;
});

const stap1 = document.querySelector(".stap1");
const stap2 = document.querySelector(".stap2");
const stap3 = document.querySelector(".stap3");
const stap4 = document.querySelector(".stap4");

stap1.addEventListener("click", function () {
  slidePage.style.marginLeft = "-0%";
  bullet[curreant - 2].classList.toggle("activerStap");
  progressText[curreant - 2].classList.toggle("activerStap");
  progressCheck[curreant - 2].classList.toggle("activerStap");
  curreant -= 1;
});

stap2.addEventListener("click", function () {
  slidePage.style.marginLeft = "-25%";
  bullet[curreant - 2].classList.toggle("activerStap");
  progressText[curreant - 2].classList.toggle("activerStap");
  progressCheck[curreant - 2].classList.toggle("activerStap");
  curreant -= 1;
});

stap3.addEventListener("click", function () {
  slidePage.style.marginLeft = "-50%";
  bullet[curreant - 2].classList.toggle("activerStap");
  progressText[curreant - 2].classList.toggle("activerStap");
  progressCheck[curreant - 2].classList.toggle("activerStap");
  curreant -= 1;
});

stap4.addEventListener("click", function () {
  slidePage.style.marginLeft = "-75%";
  bullet[curreant - 2].classList.toggle("activerStap");
  progressText[curreant - 2].classList.toggle("activerStap");
  progressCheck[curreant - 2].classList.toggle("activerStap");
  curreant -= 1;
});

// ==============
(function () {
  function Init() {
    var fileSelect = document.getElementById("file-upload"),
      fileDrag = document.getElementById("file-drag"),
      submitButton = document.getElementById("submit-button");

    fileSelect.addEventListener("change", fileSelectHandler, false);

    // Is XHR2 available?
    var xhr = new XMLHttpRequest();
    if (xhr.upload) {
      // File Drop
      fileDrag.addEventListener("dragover", fileDragHover, false);
      fileDrag.addEventListener("dragleave", fileDragHover, false);
      fileDrag.addEventListener("drop", fileSelectHandler, false);
    }
  }

  function fileDragHover(e) {
    var fileDrag = document.getElementById("file-drag");

    e.stopPropagation();
    e.preventDefault();

    fileDrag.className =
      e.type === "dragover" ? "hover" : "modal-body file-upload";
  }

  function fileSelectHandler(e) {
    // Fetch FileList object
    var files = e.target.files || e.dataTransfer.files;

    // Cancel event and hover styling
    fileDragHover(e);

    // Process all File objects
    for (var i = 0, f; (f = files[i]); i++) {
      parseFile(f);
      uploadFile(f);
    }
  }

  function output(msg) {
    var m = document.getElementById("messages");
    m.innerHTML = msg;
  }

  function parseFile(file) {
    output("<ul>" + "<li>" + encodeURI(file.name) + "</li>" + "</ul>");
  }

  function setProgressMaxValue(e) {
    var pBar = document.getElementById("file-progress");

    if (e.lengthComputable) {
      pBar.max = e.total;
    }
  }

  function updateFileProgress(e) {
    var pBar = document.getElementById("file-progress");

    if (e.lengthComputable) {
      pBar.value = e.loaded;
    }
  }

  function uploadFile(file) {
    var xhr = new XMLHttpRequest(),
      fileInput = document.getElementById("class-roster-file"),
      pBar = document.getElementById("file-progress"),
      fileSizeLimit = 1024; // In MB
    if (xhr.upload) {
      // Check if file is less than x MB
      if (file.size <= fileSizeLimit * 1024 * 1024) {
        // Progress bar
        pBar.style.display = "inline";
        xhr.upload.addEventListener("loadstart", setProgressMaxValue, false);
        xhr.upload.addEventListener("progress", updateFileProgress, false);

        // File received / failed
        xhr.onreadystatechange = function (e) {
          if (xhr.readyState == 4) {
            // Everything is good!
            // progress.className = (xhr.status == 200 ? "success" : "failure");
            // document.location.reload(true);
          }
        };

        // Start upload
        xhr.open(
          "POST",
          document.getElementById("file-upload-form").action,
          true
        );
        xhr.setRequestHeader("X-File-Name", file.name);
        xhr.setRequestHeader("X-File-Size", file.size);
        xhr.setRequestHeader("Content-Type", "multipart/form-data");
        xhr.send(file);
      } else {
        output("Please upload a smaller file (< " + fileSizeLimit + " MB).");
      }
    }
  }

  // Check for the various File API support.
  if (window.File && window.FileList && window.FileReader) {
    Init();
  } else {
    document.getElementById("file-drag").style.display = "none";
  }
})();
