const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
});


document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
      duration: 1000, // duración de la animación en milisegundos
      once: true      // solo anima una vez al hacer scroll
    });
  });

  
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3, // para PC
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {          // desde 0px (móviles)
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {        // desde 768px (tablets y PC)
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }
});



