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