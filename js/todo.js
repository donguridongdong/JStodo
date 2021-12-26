/* 내가 몰라서 베낀것은, writeTodo를 createTodo에서 독립시킬 생각하지 못한것,
createTodo의 todo를 writeTodo위에 써서 그걸 이용해 일사천리 하지못한것,
getTodo!== null을 생각해내지 못한것.
하지만 createTodo, removeTodo, setTodo 혼자 한 나. 칭찬해*/
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoBtn = document.querySelector("#todoBtn");
const todoUl = document.querySelector("#todoUl");
let todos = [];

function removeTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos= todos.filter(a => a["id"]!=li.className);
    setTodo(todos);
}

function setTodo(value) {
    localStorage.setItem("todo", JSON.stringify(value));
}

function writeTodo(todo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    li.appendChild(span);
    li.appendChild(btn);
    li.className = todo.id;
    span.innerText = todo.value;
    btn.innerText = "👌"
    todoUl.appendChild(li);
    btn.addEventListener("click", removeTodo);
}

function createTodo(event) {
    event.preventDefault();
    const todo = {"id":Date.now(), "value":todoInput.value};
    todos.push(todo);/* python이 append, JS는 push... */
    writeTodo(todo);
    setTodo(todos);
    todoInput.value = "";
}

todoForm.addEventListener("submit", createTodo);

const getTodos = localStorage.getItem("todo");

if (getTodos !== null) {
    const getTodo = JSON.parse(getTodos);
    getTodo.forEach(a => writeTodo(a));
}