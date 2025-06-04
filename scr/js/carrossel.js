const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let counter = 0;
const size = images[0].clientWidth;

function updateCarousel() {
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

// Auto slide opcional (remova se não quiser):
setInterval(() => {
  counter = (counter + 1) % images.length;
  updateCarousel();
}, 5000); // troca a cada 5 segundos