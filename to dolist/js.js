
function newNote (){
let arr = [];

var text = document.querySelector(".toDo");
var btn = document.querySelector(".btn");
var parent = document.querySelector(".box");
btn.addEventListener("click", action);
function action(){
let todo = text.value;
 arr.push(todo);
console.log(arr);


parent.append(todo);
}


}
newNote();
