$(function () {
  window.ityped.init(document.querySelector('.hero-typed'),{
    strings: ['Digital Agency',' Multiplatform '],
    loop: true
  })

  // Review  Slider
 var swiper = new Swiper(".reviewSwiper", {
  slidesPerView: "auto",
  spaceBetween: 22,
  centeredSlides: true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
  },
  autoplay: {
    delay: 0,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
    reverseDirection: false,      
},
speed: 8000,
});

  // Back to Top
  var btn = $("#button-back");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  // Header Fixed
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $(".header").addClass("header-sticky");
    } else {
      $(".header").removeClass("header-sticky");
    }
  });
  
});


 // countup
 $('.counter').countUp();

// Aos Animation
AOS.init();

// lighBox
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
});

// VenuBox
new VenoBox({
  selector: ".my-video-links",
});