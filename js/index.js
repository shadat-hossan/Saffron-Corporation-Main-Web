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

var btn = $('#backbutton');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});









