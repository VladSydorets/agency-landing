// Burger Menu
const menuBtn = document.querySelector(".nav__hamburger");
const nav = document.querySelector(".nav__menu");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    nav.classList.add("nav-open");
    document.body.classList.add("no-scroll");
    nav.classList.remove("nav__menu");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    nav.classList.remove("nav-open");
    document.body.classList.remove("no-scroll");
    nav.classList.add("nav__menu");
    menuOpen = false;
  }
});

// Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Language Selector
const languageValue = document.querySelectorAll(".nav__language-item");
for (const value of languageValue) {
  value.addEventListener("click", (e) => {
    const oldValue = document.querySelector(".nav__language-current");
    let temp = value.innerText;
    value.innerText = oldValue.innerText;
    oldValue.innerText = temp;
  });
}

// Dropdown List
const dropdown = document.querySelector(".nav__language");
const dropdownList = document.querySelector(".nav__language-list");
let isOpen = false;

dropdown.addEventListener("click", () => {
  if (!isOpen) {
    dropdownList.style.display = "flex";
    isOpen = true;
  } else {
    dropdownList.style.display = "none";
    isOpen = false;
  }
});

// Tabs
const casesBtns = document.querySelectorAll(".navbar__cases-btn");
const tabs = document.querySelectorAll(".cases");

for (let i = 0; i < casesBtns.length; i++) {
  casesBtns[i].addEventListener("click", (e) => {
    // Prevent Default Behaviour
    e.preventDefault();
    const activeBtn = document.querySelector(".cases-btn-active");
    activeBtn.classList.remove("cases-btn-active");
    casesBtns[i].classList.add("cases-btn-active");

    const activeTab = document.querySelector(".case-active");
    activeTab.classList.remove("case-active");
    tabs[i].classList.add("case-active");
  });
}

// Fading Effect Init
AOS.init();
