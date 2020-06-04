import { render } from './html-render';
import formInput from './form-input';

import './todos.css';

const todos = [
  {
    text: 'JS공부하기11111',
    isDone: false,
  },
];

formInput.init();
render(todos);
