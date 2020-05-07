const $box = document.querySelector('.box');
const $box1 = document.querySelector('.box1');

const offset = { x: 0, y: 0 };
let isDown = false;

$box.addEventListener('mousedown', mouseDown, false);
$box1.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function mouseDown(event) {
  isDown = true;
  offset.x = event.target.offsetLeft - event.clientX;
  offset.y = event.target.offsetTop - event.clientY;

  window.addEventListener('mousemove', mouseMove);
}

function mouseUp() {
  isDown = false;
  window.removeEventListener('mousemove', mouseMove, true);
}

function mouseMove(event) {
  if (!isDown) {
    return;
  }

  event.target.style.left = `${event.clientX + offset.x}px`;
  event.target.style.top = `${event.clientY + offset.y}px`;
}
