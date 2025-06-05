function setupCarousel(carrosselId, prevClass, nextClass) {
  const carrossel = document.querySelector(`#${carrosselId}`);
  const slide = carrossel.querySelector('.carousel-slide');
  const images = slide.querySelectorAll('img');
  const prev = carrossel.querySelector(`.${prevClass}`);
  const next = carrossel.querySelector(`.${nextClass}`);
  let counter = 0;

  function updateCarousel() {
    const size = images[0].clientWidth;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  next.addEventListener('click', () => {
    counter = (counter + 1) % images.length;
    updateCarousel();
  });

  prev.addEventListener('click', () => {
    counter = (counter - 1 + images.length) % images.length;
    updateCarousel();
  });

  window.addEventListener('load', updateCarousel);
  window.addEventListener('resize', updateCarousel);
}

// Espera o DOM carregar para inicializar:
window.addEventListener("DOMContentLoaded", () => {
  setupCarousel('carrossel1', 'prev1', 'next1');
  setupCarousel('carrossel2', 'prev2', 'next2');
});
