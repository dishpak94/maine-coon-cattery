
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,


//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
// });

// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   mousewheel: true,
//   keyboard: true,
// });

// const swiperPets = new Swiper(".swiper-pets", {

//   direction: "vertical",
//   loop: true,


//   navigation: {
//     nextEl: ".swiper-button-next-pets",
//     prevEl: ".swiper-button-prev-pets",
//   },


//   scrollbar: {
//     el: ".swiper-scrollbar-pets",
//   },
// });

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mySwiper', {
    watchSlidesProgress: true,
    slidesPerView: 2,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mousewhell: true,
    keybord: true,

  });
})


document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.team-slider', {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewhell: true,
    keybord: true,
  });
})
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.reviews-slider', {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewhell: true,
    keybord: true,
  });
})