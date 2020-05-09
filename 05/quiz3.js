/* eslint-disable func-names */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
const $text_btn = document.querySelector('.text-btn');
const $add_red = document.querySelector('.add-red');
const $add_btn = document.querySelector('.add-btn');
const $delete_btn = document.querySelector('.delete-btn');
const $reset_btn = document.querySelector('.reset-btn');
const $toggle_btn = document.querySelector('.toggle-btn');
const $image_btn = document.querySelector('.image-btn');
const $inputText = document.querySelector('.txt');

const red = 'red';
let hidden = false;
const imageAddress = 'https://i.imgur.com/69NjYBH.png';

function getBoxes() {
  const boxes = document.querySelectorAll('.box');
  return boxes;
}

function addRed() {
  getBoxes().forEach(function ($div) {
    $div.classList.add(red);
  });
}

function addDiv() {
  const $newDiv = document.createElement('div');
  $newDiv.className = 'box';
  document.body.appendChild($newDiv);
}

function deleteDiv() {
  const $last = getBoxes().item(getBoxes().length - 1);

  if ($last) {
    $last.remove();
  }
}

function addText() {
  const text = $inputText.value;

  getBoxes().forEach(function ($div) {
    $div.innerHTML += text;
  });
}

function reset() {
  getBoxes().forEach(function ($div) {
    $div.remove();
  });
}

function toggle() {
  hidden = !hidden;
  if (hidden === false) {
    getBoxes().forEach(function ($div) {
      $div.style = '';
    });
  } else {
    getBoxes().forEach(function ($div) {
      $div.style = 'display: none;';
    });
  }
}

function setImage() {
  const boxes = getBoxes();

  if (boxes.length === 0) {
    addDiv();
  }

  getBoxes().forEach(function ($div) {
    const img = document.createElement('img');
    img.src = imageAddress;
    $div.append(img);
  });
}

$add_red.addEventListener('click', addRed);
$add_btn.addEventListener('click', addDiv);
$delete_btn.addEventListener('click', deleteDiv);
$text_btn.addEventListener('click', addText);
$reset_btn.addEventListener('click', reset);
$toggle_btn.addEventListener('click', toggle);
$image_btn.addEventListener('click', setImage);
