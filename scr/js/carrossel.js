function setupCarousel(carrosselId, prevClass, nextClass) {
  const carrossel = document.querySelector(`#${carrosselId}`);
  if (!carrossel) return; // segurança caso o id não exista
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

// Inicializa todos os carrosseis
window.addEventListener("DOMContentLoaded", () => {
  setupCarousel('carrossel1', 'prev1', 'next1');
  setupCarousel('carrossel2', 'prev2', 'next2');
  setupCarousel('carrossel3', 'prev3', 'next3');
  setupCarousel('carrossel4', 'prev4', 'next4');
  setupCarousel('carrossel5', 'prev5', 'next5');
  setupCarousel('carrossel6', 'prev6', 'next6');
  setupCarousel('carrossel7', 'prev7', 'next7');
});

