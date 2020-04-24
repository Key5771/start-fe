const $result = document.getElementById("result");
const $btn = document.getElementById("btn");
let $inputNum = document.getElementById("num");

function gugudan(value) {
    $result.innerHTML = ""
    var value = parseInt($inputNum.value);
    if (!Number.isInteger(value)) {
        alert("숫자를 입력하세요.");
        return;
    }
    for (i=1; i <= 9; i++) {
        $result.innerHTML += `${value} x ${i} = ${value * i}<br>`;
    }
}

$btn.addEventListener("click", gugudan);