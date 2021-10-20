'use strict';

{
  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;
  let timeoutId;

  function play() {
    timeoutId = setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if (currentIndex > images.length - 1) {
        currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    }, 5000);
  }

  document.querySelector('.hero').addEventListener('mouseover', () => {
    clearTimeout(timeoutId);
  });

  document.querySelector('.hero').addEventListener('mouseout', () => {
    play();
  });

  play();
}