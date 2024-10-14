const navbar = document.querySelector(".nav__menu--list");
const toggleBtn = document.querySelector(".nav__toggle");
const openBtn = document.querySelector(".nav__open");
const closeBtn = document.querySelector(".nav__close");
toggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
  if (navbar.classList.contains("show")) {
    openBtn.style.display = "none";
    closeBtn.style.display = "flex";
  } else {
    openBtn.style.display = "flex";
    closeBtn.style.display = "none";
  }
});

let nav = document.querySelector(".nav__menu");
window.addEventListener("scroll", function () {
  nav.classList.toggle("nav__sticky", window.scrollY > 0);
});



const footerAccorditions = document.querySelectorAll(".footer .footer__accordion");
if (footerAccorditions) {
  footerAccorditions.forEach((el) => {
    let header = el.querySelector(".footer__accordion--title");
    header.addEventListener("click", () => {
      const dropdown = el.querySelector(".footer__accordion--main");
      const content = dropdown.querySelector(".footer__accordion--list");

      const isActive = el.classList.contains("active");

      footerAccorditions.forEach((accordion) => {
        accordion.classList.remove("active");
        accordion.querySelector(".footer__accordion--main").style.maxHeight = 0;
      });
      
      if (!isActive) {
        el.classList.add("active");
        dropdown.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

const brands = document.querySelector(".brands__list");
const brands__items = document.querySelectorAll(".brands__list--item");
const filter__items = document.querySelectorAll(".brands__filter--item");

filter__items.forEach((filter) => {
  filter.addEventListener("click", () => {
    filter__items.forEach((el) => {
      el.classList.remove("active");
    });
    filter.classList.add("active");

    const value = filter.dataset.value;
    brands__items.forEach((project, index) => {
      if (value == "passenger") {
        project.style.display = "flex";
      } else if (project.dataset.name == value) {
        project.style.display = "flex";
      } else {
        project.style.display = "none";
      }
    });
  });
});

const oils = document.querySelector(".oil__list");
const oil__items = document.querySelectorAll(".oil__list--item");
const oil__filter__items = document.querySelectorAll(".oil__filter--item");

oil__filter__items.forEach((filter) => {
  filter.addEventListener("click", () => {
    oil__filter__items.forEach((el) => {
      el.classList.remove("active");
    });
    filter.classList.add("active");

    const value = filter.dataset.value;
    oil__items.forEach((project, index) => {
      if (value == "original") {
        project.style.display = "flex";
      } else if (project.dataset.name == value) {
        project.style.display = "flex";
      } else {
        project.style.display = "none";
      }
    });
  });
});


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
  