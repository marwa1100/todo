
function newNote (){
let arr = [];

var text = document.querySelector(".toDo");
var btn = document.querySelector(".btn");
var fragment = document.createDocumentFragment();
var ul = document.querySelector(".ul");
var span1 = document.querySelector(".span1");
var span2 = document.querySelector(".span2");
btn.addEventListener("click", action);

function action(){
let li = document.createElement("li");
let todo = text.value;
 arr.push(todo);
span2.textContent = arr.length;
li.textContent = todo;
fragment.appendChild(li);
ul.append(fragment);
li.addEventListener("click", style)
}
}
newNote();
function style(){
  this.classList.toggle("line");
  var span1 = document.querySelector(".span1");

  span1.textContent = document.querySelectorAll(".line").length;
}
