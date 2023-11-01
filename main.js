const scrollDown = document.querySelector(".dott");

anime({
  targets: ".dott",
  translateY: 15,
  scale: 0.6,
  opacity: 0,
  duration: 1900,
  easing: "easeInOutExpo",
  loop: true,
});

const header = document.querySelector("header");
const navs = document.querySelectorAll(".nav-a");
const logo = document.querySelector(".logo");
const homeIntro = document.querySelector(".home-welcome");

const returnBtn = document.querySelector(".return-home-btn");

const options = {
  threshold: 1,
};
const observer = new IntersectionObserver((entries, observer) => {
  if (!entries[0].isIntersecting) {
    header.classList.add("scrolled");
    navs.forEach((cur) => cur.classList.add("font-dark"));
    logo.classList.add("scrolled-img");
    returnBtn.classList.add("return-home-btn-active");
  } else {
    header.classList.remove("scrolled");
    navs.forEach((cur) => cur.classList.remove("font-dark"));
    logo.classList.remove("scrolled-img");
    returnBtn.classList.remove("return-home-btn-active");
  }
}, options);

observer.observe(homeIntro);
