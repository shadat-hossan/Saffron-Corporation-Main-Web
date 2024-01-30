<!DOCTYPE html>
<html lang="en">
  <head>
    <title>saffroncorporation</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="assets/img/logo/saffron-icon-logo.svg">
    <link rel="stylesheet" href="assets/css/root.css" />
    <link rel="stylesheet" href="assets/css/navbar.css" />
    <link rel="stylesheet" href="assets/css/animate.min.css">
    <link rel="stylesheet" href="assets/css/swiper-bundle.min.css"/>
    <link rel="stylesheet" href="assets/css/owl.carousel.css">
    <link rel="stylesheet" href="assets/css/font-awesome-min.css"/>
    <link rel="stylesheet" href="assets/css/slick.min.css"/>
    <link rel='stylesheet' href="assets/css/jquery.fancybox.min.css" />
    <link rel="stylesheet" href="assets/css/aos.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
    <link rel="stylesheet" href="style.css"/>
  </head>
  <body>
   
    <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/65ae3ab70ff6374032c33d30/1hko9anpl';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->

<!--End of Tawk.to Script-->
   <div class="preloader_area preloader">
      <div class="page-transition">
        <!-- <div class="spinner spinner2"></div> -->
        <ul class="preload">
          <li><img src="assets/img/s.svg" alt="s" /></li>
          <li><img src="assets/img/a.svg" alt="a" /></li>
          <li><img src="assets/img/f.svg" alt="f" /></li>
          <li><img src="assets/img/f.svg" alt="f" /></li>
          <li><img src="assets/img/r.svg" alt="r" /></li>
          <li><img src="assets/img/o.svg" alt="o" /></li>
          <li><img src="assets/img/n.svg" alt="n" /></li>
        </ul>
      </div>
    </div>

    <?php
            function active($currect_page){
              $url_array =  explode('/', $_SERVER['REQUEST_URI']) ;
              $url = end($url_array);  
              if ($currect_page == "index.php" && (empty($url) || $currect_page == $url)) {
                echo 'active'; // class name in CSS 
            } elseif ($currect_page == $url) {
                echo 'active';
            }
            }
          ?>


    <nav class="navbar-container" id="navbarContainer">
      <div class="logo"><a href="index.php"><img src="assets/img/logo/logo.svg" alt="logo" class="logo slogo" id="logo"/></a></div>
      <div class="navbar-menu">
        <a href="index.php" class="mobileLogo"
          ><img
            src="assets/img/logo/saffron-icon-logo.svg"
            alt="logo"
            class="mobileLogoImg"
            id="logo"
        /></a>
        <ul>
          <li class="nav-item <?php active('index.php');?>"><a href="index.php">Home</a></li>
          <li class="nav-item <?php active('about.php');?>"><a href="about.php">About</a></li>
          <li class="nav-item <?php active('service.php');?>"><a href="service.php">Services</a></li>
          <li class="nav-item <?php active('our-solutions.php');?>"><a href="our-solutions.php">Solutions</a></li>
          <li class="nav-item"><a href="#">Store</a></li>
          <li class="nav-item <?php active('blog.php');?>"><a href="blog.php">Blog</a></li>
          <li class="nav-item <?php active('contact.php');?>"><a href="contact.php">Contact</a></li>
          <li class="nav-item <?php active('career.php');?>"><a href="career.php">Career</a></li>
        </ul>
      </div>
      <div class="menu-toggle">
        <div class="trigger">
          <svg
            class="bars"
            viewBox="0 0 100 100"
            onclick="this.classList.toggle('active')"
          >
            <path
              class="line top"
              d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
            ></path>
            <path
              class="line middle"
              d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
            ></path>
            <path
              class="line bottom"
              d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
            ></path>
          </svg>
        </div>
      </div>
    </nav>