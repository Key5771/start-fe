import todoModel from './todo-model';

const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');

function init(data) {
  $inputForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = $input.value;
    $input.value = '';

    data.push({
      text,
      isDone: false,
    });
  });
}

export default {
  init,
};
