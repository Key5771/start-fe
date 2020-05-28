/* eslint-disable no-plusplus */
/* eslint-disable prefer-rest-params */
// eslint-disable-next-line import/prefer-default-export
export function avg() {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'object') {
      for (let j = 0; j < arguments[i].length; j++) {
        sum += arguments[i][j];
        count += 1;
      }
    } else if (typeof arguments[i] !== 'number') {
      // eslint-disable-next-line no-continue
      continue;
    } else {
      sum += arguments[i];
      count += 1;
    }
  }

  return sum / count;
}

export function random() {
  let max = 0;
  let min = 0;
  let num = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== 'number') {
      return -1;
    }

    if (arguments.length === 1) {
      min = 0;
      max = arguments[i];
    } else {
      min = Math.ceil(arguments[0]);
      max = Math.floor(arguments[1]);
    }
    num = Math.floor(Math.random() * (max - min)) + min;
  }

  return num;
}
