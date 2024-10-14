var swiper = new Swiper(".hero .container .hero__swiper", {
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: "1",
      spaceBetween: 10,
      loop: true,
    },
    470: {
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

var oil__list = new Swiper(".oil__list", {
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: "auto",
      spaceBetween: 35,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 68,
    },
  },
});

var oil__cards = document.querySelectorAll(".oil__list--item");

oil__cards.forEach((card) => {
  let swiper__card = card.querySelector(".oil__list--item .swiper");
  var s = new Swiper(swiper__card, {
    spaceBetween: 20,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".oil__list--item .swiper-pagination",
      clickable: true,
    },
  });
});

var logos__swiper = new Swiper(".logos .container .logos__swiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 0,
  breakpoints: {
    0: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: ".logos .container .swiper-button-next",
    prevEl: ".logos .container .swiper-button-prev",
  },
});

var products__list = new Swiper(".products__list", {
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: "auto",
      spaceBetween: 35,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 68,
    },
  },
});

var product__cards = document.querySelectorAll(".products__list--item");

product__cards.forEach((card) => {
  let swiper__card = card.querySelector(".products__list--item .swiper");
  var s = new Swiper(swiper__card, {
    spaceBetween: 20,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".products__list--item .swiper-pagination",
      clickable: true,
    },
  });
});

var videos__swiper = new Swiper(".videos__swiper", {
  slidesPerView: 3,
  spaceBetween:15,
  loop: true,
  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  }
});
