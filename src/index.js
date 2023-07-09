async function getWeatherInfo(location) {
    //const fetchWeather = await fetch("https://api.weatherapi.com/v1/current.json?key=9526e5c471524e3498d02146230907&q=" + location);
    const fetchWeather = await fetch("https://api.weatherapi.com/v1/forecast.json?key=9526e5c471524e3498d02146230907&q=" + location + "&days=3");
    const response = await fetchWeather.json();
    console.log(response);
}

const weatherForm = document.querySelector("#weather-form");
weatherForm.addEventListener("submit", event=>{
    event.preventDefault();

    const search = document.querySelector("#search");

    getWeatherInfo(search.value);
})

