import './style.css'

var swiper = new Swiper(".packages .mySwiper", {
slidesPerView: 1,
spaceBetween: 40,
loop: true,
breakpoints: {
  1024: {
    slidesPerView: 2,
  }},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".destinations .mySwiper", {
slidesPerView: 1,
spaceBetween: 20,
loop: true,
breakpoints: {
  640: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  }},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".exclusive .mySwiper", {
slidesPerView: 1,
spaceBetween: 20,
loop: true,
breakpoints: {
  768: {
    slidesPerView: 2,
  }},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".popular-hotel .mySwiper", {
slidesPerView: 1,
spaceBetween: 20,
loop: true,
breakpoints: {
  640: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  }},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
