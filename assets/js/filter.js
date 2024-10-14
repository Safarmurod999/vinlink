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
