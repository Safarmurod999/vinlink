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
