// Hero slider function
let currentSlide = 0;
const slides = document.querySelectorAll("#hero .bg-slide");

setInterval(() => {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
}, 4000);

// Menu icon function
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

// Image hover function
const images = document.querySelectorAll(".img");

images.forEach((image) => {
  image.addEventListener(
    "mouseenter",
    () => (image.style.transform = "scale(1.05)")
  );
  image.addEventListener(
    "mouseleave",
    () => (image.style.transform = "scale(1)")
  );
});

// Scroll mode function
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navigation-bar");
  if (window.scrollY > 700) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Light/Dark function
const switchButton = document.querySelector("#switch");
const logo = document.querySelector("#logo");

switchButton.addEventListener("click", (event) => {
  event.preventDefault();

  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");

  logo.src = document.body.classList.contains("light-mode")
    ? "logo small black.png"
    : "logo smaller.png";
});

const scrollToTopButton = document.querySelector("#scrollToTop");

// When the user scrolls down 1000px from the top of the document, show the button
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// When the user clicks on the button, scroll to the top of the page
scrollToTopButton.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Form validation
const loginForm = document.querySelector(".loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector("#email");
  email.setAttribute("autocomplete", "on");

  const password = document.querySelector("#password");
  password.setAttribute("autocomplete", "on");

  const confirmPassword = document.querySelector("#confirmPassword");
  confirmPassword.setAttribute("autocomplete", "on");

  if (!validateEmail(email.value)) {
    alert("Invalid email");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match");
    return;
  }

  // Possibility to check in console if form is valid
  console.log("Form is valid");
});

// Email validation
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const email = document.querySelector("#email").value;
if (!validateEmail(email)) {
  console.log("Invalid email address");
}
