const $url = document.getElementById('url');
const $btn = document.getElementById('btn');
const $log = document.getElementById('log');

function printLog(str) {
  $log.value = str;
}

function success(result) {
  result.text().then(printLog);
}

function fail(error) {
  printLog(error);
}

function fetchUrl() {
  const url = $url.value;

  if (!url) {
    window.alert('URL을 입력하세요');
  } else {
    fetch(url).then(success).catch(fail);
  }
}

function enter(event) {
  if (event.keyCode === 13) {
    fetchUrl();
  }
}

$btn.addEventListener('click', fetchUrl);
$url.addEventListener('keypress', enter);
