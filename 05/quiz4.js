/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
const $box = document.getElementById('box');

$box.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function mouseDown(event) {
  $box.style.left = `${$box.offsetLeft - event.clientX}px`;
  $box.style.top = `${$box.offsetTop - event.clientY}px`;

  window.addEventListener('mousemove', mouseMove, true);
}

function mouseMove(event) {
  const positionX = event.clientX;
  const positionY = event.clientY;

  $box.style.left = `${positionX}px`;
  $box.style.top = `${positionY}px`;

  x = positionX;
  y = positionY;
}

function mouseUp() {
  window.removeEventListener('mousemove', mouseMove, true);
}
