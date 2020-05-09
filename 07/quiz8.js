/* eslint-disable radix */
/* eslint-disable no-param-reassign */
const $box = document.getElementById('box');
const $min = document.getElementById('min');
const $max = document.getElementById('max');
const $btn = document.getElementById('btn');

function createNum(max, min) {
  //   value = parseInt($max.value - $min.value);
  $box.innerHTML = '';
  max = parseInt($max.value);
  min = parseInt($min.value);

  const result = parseInt(Math.random() * (max - min) + min);
  let number = result - 50;
  const interval = setInterval(() => {
    $box.innerHTML = number;
    if (number >= result) clearInterval(interval);
    number += 1;
  }, 10);
  // $box.innerHTML = `${result}`;
}

$btn.addEventListener('click', createNum);
