//menu responsive click
document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.navbar-menu');

  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
  });
});

// menu scroll effect
document.addEventListener('scroll', function () {
  var navbarContainer = document.querySelector('.navbar-container');
  var logo= document.querySelector('.slogo')
  var menuItems = document.querySelectorAll('.navbar-container .navbar-menu ul li a');
  if (document.documentElement.scrollTop > 80) {
    navbarContainer.classList.add('shrink');
    logo.classList.add('logoShirnk');
    menuItems.forEach(function (menuItem) {
      menuItem.classList.add('menuItemsAllA');
    });

  } else {
    navbarContainer.classList.remove('shrink');
    logo.classList.remove('logoShirnk');
    menuItems.forEach(function (menuItem) {
      menuItem.classList.remove('menuItemsAllA');
    });
  }
});

const storyReadMor = document.querySelector(".storyReadMor");
const hiddenText = document.querySelector("#hiddenText");
const dot = document.querySelector("#dot");

function any() {
  storyReadMor.addEventListener("click", () => {
    if (dot.style.display != "none") {
      hiddenText.style.display = "inline";
      dot.style.display = "none";
      storyReadMorImage.style.transform = "rotate(90deg)";
      storyReadMor.innerHTML = `Read Less <img
      src="img/logo/arrayUp.svg"
      alt="Read More Icon"
      id="storyReadMorImage"
    />`;
    } else {
      hiddenText.style.display = "none";
      dot.style.display = "inline";
      storyReadMorImage.style.transform = "rotate(0deg)";
      storyReadMor.innerHTML = `Read More <img
      src="img/logo/arrayDown.svg"
      alt="Read More Icon"
      id="storyReadMorImage"
    />`;
    }
  });
}

any();








