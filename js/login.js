const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginInput");
const loginBtn = document.querySelector("#loginBtn");
const userName = document.querySelector("#username");
const todoForms = document.querySelector("#todoForm");
const todoUls = document.querySelector("#todoUl");
const quotess = document.querySelector("#quotes");

function login() {
    const name = loginInput.value;
    localStorage.setItem("username", name);
}

const getName = localStorage.getItem("username");

if (getName) {
    userName.innerText = `${getName}'s Todo`;
    userName.classList.remove("hiding");
    loginForm.classList.add("hiding");
    todoForms.classList.remove("hiding");
    todoUls.classList.remove("hiding");
    quotess.classList.remove("hiding");
}
else{
    loginForm.addEventListener("submit", login);
}