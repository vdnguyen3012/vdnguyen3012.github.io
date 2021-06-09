const body = document.querySelector("body");
const header = document.querySelector(".header");
const navToggle = document.querySelector(".header__nav-toggle");
const navLinks = document.querySelectorAll(".header__nav-link");

navToggle.addEventListener("click", () => {
  header.classList.toggle("nav-open");
  body.classList.toggle("noscroll");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (header.classList.contains("nav-open")) {
      header.classList.remove("nav-open");
    }

    if (body.classList.contains("noscroll")) {
      body.classList.remove("noscroll");
    }
  });
});
