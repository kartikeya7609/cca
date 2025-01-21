let currentIndex = 0;

const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const slides = document.querySelector('.carousel-slides');
const totalSlides = slides.children.length;

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
slides.style.transform = 'translateX(0)';

nextButton.addEventListener('click', () => moveSlide(1));
prevButton.addEventListener('click', () => moveSlide(-1));

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    moveSlide(-1);
  } else if (event.key === 'ArrowRight') {
    moveSlide(1);
  }
});
const intervalTime = 5000; 
let autoSlideInterval = setInterval(() => {
  moveSlide(1);
}, intervalTime);
