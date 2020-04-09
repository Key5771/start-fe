var board = document.getElementById("board");
var count = 1;

for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
        // TODO : 여기에 필요한 코드를 작성해주세요.
        var span = document.createElement("span");
        if (i%2==0) {
            if (j==0 || j==2) {
                span.className = "black";
            } else {
                span.className = "white";
            }
        } else {
            if (j==1 || j==3) {
                span.className = "black";
            } else {
                span.className = "white";
            }
        }

        board.appendChild(span);

        span.addEventListener("click", function(event) {
            console.log(event.target.className);
            if (count == 1) {
                event.target.style.backgroundColor = "red";
                count++;
            } else {
                if (event.target.className == "black") {
                    event.target.style.backgroundColor = "black";
                } else {
                    event.target.style.backgroundColor = "white";
                }
                count--;
            }
            
        });
    }
}