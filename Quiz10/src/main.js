import { avg, random } from './quiz';

document.getElementById('debug1').innerHTML = avg(1, 2, 3, 4, 5, 6);
document.getElementById('debug2').innerHTML = avg(3, 3, 'a');
document.getElementById('debug3').innerHTML = avg([1, 2, 3]);

document.getElementById('debug11').innerHTML = random(90, 100);
document.getElementById('debug12').innerHTML = random('a');
document.getElementById('debug13').innerHTML = random(10);
