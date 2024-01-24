     <div class="footer_area">
      <div class="footer center_content flex-wrap">
        <div class="footer_social">
          <h4>Stay Connected</h4>
          <div class="social_box flex-nowrap d-flex">
            <a href="#"><img src="assets/img/social/youtube.svg" alt=""></a>
            <a href="#"><img src="assets/img/social/facebook.png" alt=""></a>
            <a href="#"><img src="assets/img/social/instagram.png" alt=""></a>
            <a href="#"><img src="assets/img/social/twitter.svg" alt=""></a>
          </div>
        </div>
        <div class="footer_right">
          <h4>Your Privacy Choices</h4>
          <div class="footer_menu flex-wrap">
            <ul>
              <li><a href="#">Contact SCL</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Trademarks</a></li>
              <li><a href="#">Work List</a></li>
            </ul>
            <p>Copyright &copy; 2023 SCL. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
    <a id="backbutton"></a>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/slick.min.js"></script>
    <script src="assets/js/index.js"></script>
    <script src="assets/js/owl.carousel.min.js"></script>
    <script src="assets/js/wow.js"></script>
    <script src="assets/js/TweenMax.min.js"></script>
    <script src="assets/js/particles.min.js"></script> 
    <script src="assets/js/aos.js"></script>
    <script src="assets/js/waypoints.min.js"></script>
    <script src="assets/js/jquery.fancybox.min.js"></script>
    <script src="assets/js/jquery.counterup.js"></script>
    <script src="assets/js/service.js"></script>
    <script src="assets/js/script.js"></script>
    <script src="assets/js/career.js"></script>
    <script>
      var skills = {
        trusted: 90,
        partners: 70,
        professional: 65,
      };

      $.each(skills, function(key, value) {
        var skillbar = $("." + key);

        skillbar.animate(
          {
            width: value + "%"
          },
          3000,
          function() {
            $(".speech-bubble").fadeIn();
          }
        );
      }); 
    </script>
    <script>
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

    </script>
    <script>
      particlesJS("snow-js", {"particles":{"number":{"value":400,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":10,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":6,"direction":"bottom","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
    </script>
    <script>
      particlesJS("particles-nasa", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#de1919"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":8,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.33,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":3.83846461415434},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":1200,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);
    </script>
    <script>
      particlesJS("particles-culture", {"particles":{"number":{"value":6,"density":{"enable":true,"value_area":800}},"color":{"value":"#b91219"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":120,"random":false,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":590,"rotateY":1000}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);
    </script>
    <script>
      particlesJS("particles-js2", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#f6d2d2"},"shape":{"type":"circle","stroke":{"width":9,"color":"#f6d2d2"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":40,"size_min":0,"sync":true}},"line_linked":{"enable":true,"distance":150,"color":"#f6d2d2","opacity":1,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);
    </script>
    <script>
      particlesJS("particles-js1", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#f6d2d2"},"shape":{"type":"circle","stroke":{"width":9,"color":"#f6d2d2"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":40,"size_min":0,"sync":true}},"line_linked":{"enable":true,"distance":150,"color":"#f6d2d2","opacity":1,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);
    </script>
    <script>
      particlesJS("particles-js3", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#f6d2d2"},"shape":{"type":"circle","stroke":{"width":9,"color":"#f6d2d2"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":40,"size_min":0,"sync":true}},"line_linked":{"enable":true,"distance":150,"color":"#f6d2d2","opacity":1,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);
    </script>
    
    <script>
      AOS.init({
        duration: 1200,
      })

     $('.count').counterUp({
            delay: 10,
            time: 1000
        });
     
    </script>

    <script>
      (function (jQuery) {
        jQuery(window).on("load", function () {
          handlePreloader();
        });
        function handlePreloader() {
          if (jQuery(".preloader").length) {
            jQuery(".preloader").delay(3000).fadeOut();
          }
        }
      })(jQuery);

      (function($){
            var preLoderLi = $('.preload li'),
              pageDiv = $('.page-transition .div'),
              slideDown = new TimelineMax({paused : true}),
              loading = new TimelineMax({paused : true , repeat : 2}),
              slideUp = new TimelineMax({paused : true}),
              loadAnimation = new TimelineMax({repeat : -1});
              slideDown.staggerTo(pageDiv , 0.5 ,{
                bottom : "0%" ,
                ease : Power2.easeIn
              }, 0.2);
              loading.staggerFrom(preLoderLi, 0.5 ,{
                y : -15,
                autoAlpha : 0,
                ease : Power1.easeIn
              },0.2)
              .staggerTo(preLoderLi , 0.5,{
                y : 35,
                autoAlpha : 0,
                ease : Power1.easeIn
              },0.1);
               slideUp.staggerTo(pageDiv , 0.5 ,{
                bottom : "100%" ,
                ease : Power2.easeOut
              }, 0.2);
              loadAnimation.add(slideDown.play(), 0.5)
               .add(loading.play())
               .add(slideUp.play());
        })(jQuery);

      $('.slider').slick({
          draggable: true,
          autoplay: true,
          autoplaySpeed: 6000,
          arrows: false,
          dots: false,
          fade: true,
          speed: 500,
          infinite: true,
          cssEase: 'ease-in-out',
          touchThreshold: 100
        })

        $('#service_carousel2').owlCarousel({
            loop:true,
            margin: 0,
            items: 3,
            nav:true,
            mouseDrag: true,
            touchDrag: true,
            dots:true,
            slideBy: 1,
            dotsEach: 1,
            responsiveClass:true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    rows: true,
                    dotsEach: 2,
                    rowsCount: 2
                },
                768: {
                    items: 2,
                    slideBy: 1,
                    dotsEach: 2,
                },
                1280: {
                    items: 3,
                    slideBy: 1,
                    dotsEach: 2,
                }
            },
        });

        $('#service_carousel').owlCarousel({
            loop:true,
            margin: 0,
            items: 4,
            nav:true,
            mouseDrag: true,
            touchDrag: true,
            dots:true,
            slideBy: 1,
            dotsEach: 1,
            responsiveClass:true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    rows: true,
                    dotsEach: 2,
                    rowsCount: 2
                },
                768: {
                    items: 2,
                    slideBy: 1,
                    dotsEach: 2,
                },
                992: {
                    items: 3,
                    slideBy: 1,
                    dotsEach: 2,
                },
                1280: {
                    items: 4,
                    slideBy: 1,
                    dotsEach: 2,
                }
            },
        });
        $('.clients_slider').owlCarousel({
            loop:true,
            margin: 0,
            items: 6,
            nav:true,
            mouseDrag: true,
            touchDrag: true,
            dots:false,
            slideBy: 1,
            dotsEach: 1,
            responsiveClass:true,
            responsive: {
                0: {
                    items: 2,
                    margin: 0,
                    rows: true,
                    dotsEach: 3,
                    dots:true,
                    rowsCount: 2
                },
                768: {
                    items: 3,
                    slideBy: 1,
                    dotsEach: 2,
                },
                992: {
                    items: 5,
                    slideBy: 1,
                    dotsEach: 2,
                },
                1280: {
                    items: 6,
                    slideBy: 1,
                    dotsEach: 2,
                }
            },
        });
        $('.review_slider').owlCarousel({
            loop:true,
            margin: 0,
            items: 1,
            nav:false,
            mouseDrag: false,
            touchDrag: true,
            autoplay:true,
            autoplayTimeout:4000,
            dots:false,
            slideBy: 1,
            dotsEach: 1,
            responsiveClass:true,
             animateOut: 'slideOutUp',
            animateIn: 'slideInUp',
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    dotsEach: 1,
                    dots:true,
                }
            },
        });

        $('.data_pipeline_slider').owlCarousel({
            loop:true,
            margin: 0,
            items: 5,
            nav:false,
            mouseDrag: false,
            touchDrag: true,
            dots:false,
            slideBy: 1,
            dotsEach: 1,
            responsiveClass:true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    rows: true,
                    dotsEach: 3,
                    dots:true,
                    rowsCount: 2,
                    mouseDrag: true,
                },
                768: {
                    items: 3,
                    slideBy: 1,
                    dotsEach: 2,
                    mouseDrag: true,
                    dots:true,
                },
                992: {
                    items: 4,
                    slideBy: 1,
                    dotsEach: 2,
                },
                1280: {
                    items: 5,
                    slideBy: 1,
                    dotsEach: 2,
                }
            },
        });


        jQuery( ".toggle_view_bg" ).click(function(e) {
          if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
          } else {
              $( ".toggle_view_bg" ).each(function() {
                  if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
                      jQuery(this).parent('.toggle_view_item').toggleClass('active');
                      jQuery(this).next('.show_details').slideToggle('hide');
                  }
              });
          }
          jQuery(this).parent('.toggle_view_item').toggleClass('active');
          jQuery(this).next('.show_details').slideToggle('slow');
          e.preventDefault();
      });


      $('.services-slider').owlCarousel({
            loop:true,
            margin: 0,
            items: 6,
            nav:false,
            mouseDrag: false,
            touchDrag: true,
            dots:false,
            slideBy: 1,
            dotsEach: 1,
            responsiveClass:true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    rows: true,
                    dotsEach: 3,
                    dots:false,
                    rowsCount: 2,
                    mouseDrag: true,
                },
                 580: {
                    items: 2,
                    slideBy: 1,
                    dotsEach: 2,
                    mouseDrag: true,
                    dots:false,
                },
                768: {
                    items: 4,
                    slideBy: 1,
                    dotsEach: 2,
                    mouseDrag: true,
                    dots:false,
                },
                992: {
                    items: 5,
                    slideBy: 1,
                    dotsEach: 2,
                },
                1280: {
                    items: 6,
                    slideBy: 1,
                    dotsEach: 2,
                }
            },
        });

        $('.office_video_slider').owlCarousel({
              loop:true,
              margin: 0,
              items: 1,
              nav:false,
              mouseDrag: true,
              touchDrag: true,
              dots:false,
              slideBy: 1,
              dotsEach: 1,
              animateOut: 'fadeOut',
              animateIn: 'fadeIn',
              autoplay:true,
              // autoplayTimeout:4000,
              responsiveClass:true,
              responsive: {
                  0: {
                      items: 1,
                  }
              },
          });
    </script>
    <script>
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
      any();

      var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
      });
    </script>
    </body>
</html>