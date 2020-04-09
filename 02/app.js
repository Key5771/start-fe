console.log("app");

// Create
var todos = ["운동"];
var todo = "게임";
todos.push(todo);
console.log(todos);

// Read
todos.forEach(function(todo) {
    console.log(todo);
});


// Update

// 방법 1
// var todos = ["운동", "게임"];
// var updateTodo = "게임"
// var updateIndex = todos.findIndex(function(todo) {
//     return todo === updateTodo;
// });
// todos[updateIndex] = "공부";
// console.log(todos);

// 방법 2
// var todos = ["운동", "게임"];
// var updateTodo = "공부";

// var newTodos = todos.map(function(todo) {
//     if (todo === updateTodo) {
//         return "공부";
//     }
//     return todo;
// });

// console.log(newTodos);


// Delete
// var todos = ["운동", "공부", "목욕"];
// var deleteTodo = "공부";
// var deleteIndex = todos.findIndex(function(todo) {
//     return todo === deleteTodo;
// });
// todos.splice(deleteIndex, 1);
// console.log(todos);

// var isMan = true;
// if (isMan) {
//     console.log("남자");
// } else {
//     console.log("여자");
// }

// var gender = isMan ? "남자" : "여자"
// console.log(gender);

// window.alert("안녕하세요");
// var who = prompt("당신은 누구세요?");
// var isDelete = confirm("정말로 삭제하시겠습니까?");

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(1, 2));

// var car = {
//     year: 2014,
//     starting: function() {
//         console.log("starting!!!");
//     },
// };

// car.starting();

// (function() {
//     var a = "a";
//     console.log(a);
// })();

// function sum(x, y) {
//     if (!y) y = 1;
//     return x + y;
// }

// console.log(sum(3));

// function gugudan() {
//     for(i = 2; i <= 9; i++) {
//         for(j = 1; j <= 9; j++) {
//             console.log(i + " * " + j + " = " + i*j);
//         }
//     }
// }


var a = prompt("숫자를 입력하세요.");
var b = prompt("숫자를 입력하세요.");
var c = prompt("숫자를 입력하세요.");
var result = parseInt(a) + parseInt(b) + parseInt(c)
alert("숫자의 합은 " + result + "입니다.");
