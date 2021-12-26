const weather = document.querySelector("#weather");
/* fetch, navigator.geolocation 공부해보기. */
function geoError() {
    alert("Your location is not Found.")
}

function geo(event) {
    const lat = event.coords.latitude;
    const lon = event.coords.longitude;
    const APIkey = "68d84781a57e195e73e54974c4ffe201";
    const location = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
    fetch(location)
        .then((response) => response.json())
        .then((data)=>{
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            const name = data.name;
            /*city.innerText = `${data.name}`; 안이뻐서 탈락.*/
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
        });
    console.log(location);
}

navigator.geolocation.getCurrentPosition(geo, geoError);