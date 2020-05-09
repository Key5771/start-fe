/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable no-undef */
const $result = document.getElementById('result');
const $btn = document.getElementById('btn');
const $inputNum = document.getElementById('num');

// eslint-disable-next-line no-shadow
function gugudan(value) {
  $result.innerHTML = '';
  value = parseInt($inputNum.value);
  if (!Number.isInteger(value)) {
    // eslint-disable-next-line no-alert
    alert('숫자를 입력하세요.');
    return;
  }
  for (i = 1; i <= 9; i += 1) {
    $result.innerHTML += `${value} x ${i} = ${value * i}<br>`;
  }
}

$btn.addEventListener('click', gugudan);
