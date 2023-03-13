const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const elNavToggle = document.querySelector(".nav-toggle");
const elLinkContainer = document.querySelector(".links-container");
const elLinks = document.querySelector(".links");

elNavToggle.addEventListener("click", function () {
  //   elLinkContainer.classList.toggle("show-links");
  const containerHeigh = elLinkContainer.getBoundingClientRect().height;
  const linksHeigh = elLinks.getBoundingClientRect().height;
  if (containerHeigh === 0) {
    elLinkContainer.style.height = `${linksHeigh}px`;
  } else {
    elLinkContainer.style.height = 0;
  }
});
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (this.window.pageYOffset > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const scrollLins = document.querySelectorAll(".scroll-link");
scrollLins.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containeHeight = elLinkContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containeHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    elLinkContainer.style.height = 0;
  });
});
