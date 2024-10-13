var swiper = new Swiper(".hero .container .hero__swiper", {
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: "auto",
      spaceBetween: 10,
      loop: true,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".hero .container .hero__swiper .swiper-button-next",
    prevEl: ".hero .container .hero__swiper .swiper-button-prev",
  },
});
