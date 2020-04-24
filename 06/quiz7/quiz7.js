const $box = document.querySelector(".box");
const $bug = document.getElementById("bug");
const $point = document.getElementById("point");
const $life = document.getElementById("life");

var count = 0;
var life = parseInt($life.textContent);
var time = setInterval(moveBug, 1000);

function moveBug() {
    const width = $box.clientWidth - $bug.clientWidth;
    const height = $box.clientHeight - $bug.clientHeight;

    $bug.style.left = Math.random() * width + "px";
    $bug.style.top = Math.random() * height + "px";
}

function plusPoint(event) {
    count += 1;
    $point.textContent = count;

    event.stopPropagation();
}

function minusLife(event) {
    life -= 1;
    $life.textContent = life;

    if (life == 0) {
        alert("Game Over");
    }
}

$bug.addEventListener("click", plusPoint);
$box.addEventListener("click", minusLife);