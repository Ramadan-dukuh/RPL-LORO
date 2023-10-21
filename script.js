var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'truw',
  fade: 'true',
  gragCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullet: true,
  },


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    520:{
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView:2,
      spaceBetween:20,
    },
    768: {
      slidesPerView:3,
      spaceBetween:25,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});


function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  // Check if there are elements matching the selector and if the requested instance exists
  if (elements.length > instance) {
      // Scroll to the specified instance of the element
      elements[instance].scrollIntoView({ behavior: 'smooth' });
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener('click', () => {
  scrollToElement('nav');
});

link2.addEventListener('click', () => {
  scrollToElement('.header',);
});

link3.addEventListener('click', () => {
  scrollToElement('.header', 1);
});

link4.addEventListener('click', () => {
  scrollToElement('footer',);
});


