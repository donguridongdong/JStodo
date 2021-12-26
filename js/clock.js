const clock = document.querySelector("#clockHour");
const day = document.querySelector("#clockDate");
const MONTH = ["January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function operate() {
    const today = new Date();
    const year = today.getFullYear();
    const date = today.getDate();
    const month = today.getMonth();
    const hour = today.getHours().toString().padStart(2, "0");
    const minutes = today.getMinutes().toString().padStart(2, "0");
    day.innerText = `${MONTH[month]} ${date} ${year}`;
    clock.innerText = `${hour}:${minutes}`;
}
operate();
setInterval(operate, 1000);