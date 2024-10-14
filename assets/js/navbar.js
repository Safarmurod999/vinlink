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
