var $text_btn = document.querySelector(".text-btn");
var $add_red = document.querySelector(".add-red");
var $add_btn = document.querySelector(".add-btn");
var $delete_btn = document.querySelector(".delete-btn");
var $reset_btn = document.querySelector(".reset-btn");
var $toggle_btn = document.querySelector(".toggle-btn");
var $image_btn = document.querySelector(".image-btn");
var $inputText = document.querySelector(".txt");

var red = "red";
var hidden = false;
var imageAddress = "https://i.imgur.com/69NjYBH.png";

function getBoxes() {
    var boxes = document.querySelectorAll(".box");
    return boxes;
}

function addRed() {
    getBoxes().forEach(function($div) {
        $div.classList.add(red);
    });
}

function addDiv() {
    var $newDiv = document.createElement("div");
    $newDiv.className = "box";
    document.body.appendChild($newDiv);
}

function deleteDiv() {
    var $last = getBoxes().item(getBoxes().length - 1);

    if ($last) {
        $last.remove();
    }
}

function addText() {
    var text = $inputText.value;
    
    getBoxes().forEach(function($div) {
        $div.innerHTML += text;
    });
}

function reset() {
    getBoxes().forEach(function($div) {
        $div.remove();
    });
}

function toggle() {
    hidden = !hidden;
    if(hidden == false) {
        getBoxes().forEach(function($div) {
            $div.style = "";
        });
    } else {
        getBoxes().forEach(function($div) {
            $div.style = "display: none;";
        });
    }
}

function setImage() {
    var boxes = getBoxes();

    if(boxes.length == 0) {
        addDiv();
    }

    getBoxes().forEach(function($div) {
        var img = document.createElement("img");
        img.src = imageAddress; 
        $div.append(img);
    });
}

$add_red.addEventListener("click", addRed);
$add_btn.addEventListener("click", addDiv);
$delete_btn.addEventListener("click", deleteDiv);
$text_btn.addEventListener("click", addText);
$reset_btn.addEventListener("click", reset);
$toggle_btn.addEventListener("click", toggle);
$image_btn.addEventListener("click", setImage);

