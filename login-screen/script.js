document.addEventListener('DOMContentLoaded', function () {
  const slideBox = document.getElementById('slideBox');
  const topLayer = document.querySelector('.topLayer');

  function slideToLeft() {
      slideBox.style.marginLeft = '0';
      topLayer.style.marginLeft = '100%';
  }

  function slideToCenter() {
      slideBox.style.marginLeft = '50%';
      topLayer.style.marginLeft = '0';
  }

  document.getElementById('goRight').addEventListener('click', slideToLeft);
  document.getElementById('goLeft').addEventListener('click', slideToCenter);
});