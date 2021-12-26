const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginInput");
const loginBtn = document.querySelector("#loginBtn");
const userName = document.querySelector("#username");

function login() {
    const name = loginInput.value;
    localStorage.setItem("username", name);
}

const getName = localStorage.getItem("username");

if (getName) {
    userName.innerText = `${getName}'s Todo`;
    userName.classList.remove("hiding");
    loginForm.classList.add("hiding");
}
else{
    loginForm.addEventListener("submit", login);
}