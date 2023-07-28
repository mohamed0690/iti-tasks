var slider = document.querySelector('.slider');
var prevBtn = document.querySelector('.prev-btn');
var nextBtn = document.querySelector('.next-btn');
var slideWidth = slider.clientWidth;
var slideIndex = 0;


function prevSlide() {
    slideIndex = (slideIndex - 1 + slider.children.length) % slider.children.length;
    updateSliderPosition();
  }
  
  function nextSlide() {
    slideIndex = (slideIndex + 1) % slider.children.length;
    updateSliderPosition();
  }

function updateSliderPosition() {
  slider.style.transform = 'translateX(-' + slideIndex * slideWidth + 'px)';
}
