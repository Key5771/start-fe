import { render } from './html-render';
import formInput from './form-input';

import './todos.css';

const todos = [];

formInput.init(todos);
render(todos);
