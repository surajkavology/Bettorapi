$(document).ready(function(){
    $(".menu-toggle").click(function(){
        $("body").addClass("toggle");
    });
});

$(document).ready(function(){
    $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
    });
});

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   freeMode: true,
//   speed: 6000,
//   grabCursor: true,
//   mousewheelControl: true,
//   keyboardControl: true,
//   autoplay: {
//     delay: 1,
//     disableOnInteraction: false
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
  
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  loop:true,
  spaceBetween: 30,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    500: {
      slidesPerView: 1
    },
    700: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    },
    1366: {
      slidesPerView: 4
    }
  }
});

$(document).ready(function(){
  $(window).scroll(function(){
    var header = $("header");
    header.toggleClass("sticky", $(window).scrollTop() > 0 );
  });
});


