const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});



// Function to toggle the menu
function toggleMenu() {
    navLinks.classList.toggle('open');
}

// Event listeners for clicking and touching the menu button
menuBtn.addEventListener('click', toggleMenu);

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    navLinks.classList.toggle('open');
}



navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
});

// Slider functionality
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[n].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

const slideInterval = setInterval(nextSlide, 10000);

// Stop slide interval on hover
const sliderContainer = document.querySelector('.slider');
sliderContainer.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
  slideInterval = setInterval(nextSlide, 10000);
});


const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});



const instagram = document.querySelector(".collections__flex");

Array.from(instagram.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const testimonialImages = document.querySelectorAll('.testimonial-img');

function showTestimonial(n) {
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove('active');
  });
  testimonialImages.forEach((img) => {
    img.classList.remove('active');
  });
  testimonials[n].classList.add('active');
  testimonialImages[n].classList.add('active');
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
}



menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});


