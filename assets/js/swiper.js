var swiper = new Swiper(".hero .container .hero__swiper", {
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".hero .container .hero__swiper .swiper-button-next",
    prevEl: ".hero .container .hero__swiper .swiper-button-prev",
  },
});
const swiperArray = [
  {
    id: 0,
    img: "./assets/images/home/swiper.png",
    title: "ОРИГИНАЛЬНЫЕ ЗАПЧАСТИ КОМПЛЕКТЫ ДЛЯ ТО МОТОРНЫЕ МАСЛА",
    text: "в наличии и под заказ",
    link: "#",
  },
  {
    id: 1,
    img: "./assets/images/home/swiper.png",
    title: "ОРИГИНАЛЬНЫЕ ЗАПЧАСТИ КОМПЛЕКТЫ ДЛЯ ТО МОТОРНЫЕ МАСЛА",
    text: "в наличии и под заказ",
    link: "#",
  },
  {
    id: 2,
    img: "./assets/images/home/swiper.png",
    title: "ОРИГИНАЛЬНЫЕ ЗАПЧАСТИ КОМПЛЕКТЫ ДЛЯ ТО МОТОРНЫЕ МАСЛА",
    text: "в наличии и под заказ",
    link: "#",
  },
];
var swiper__wrapper = document.querySelector(".swiper-wrapper");

for (const el of swiperArray) {
  swiper__wrapper.innerHTML += `
  <div class="swiper-slide">
    <img src="${el.img}" alt="slide" />
    <div class="hero__swiper-content">
      <h2>${el.title}</h2>
      <p>${el.text}</p>
      <a href="${el.link}" class="btn button">Подробнее о нас</a>
    </div>
  </div>
  `;
}
