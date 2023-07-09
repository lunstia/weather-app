async function getWeatherInfo(location) {
  const fetchWeather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9526e5c471524e3498d02146230907&q=${location}&days=3`);
  const response = await fetchWeather.json();

  document.body.style.setProperty('background-image', `url(${response.current.is_day ? 'images/daytime.webp' : 'images/nightsky.webp'})`);

  const line = document.querySelector('#line');
  line.classList = response.current.is_day ? 'day' : 'night';

  const container = document.querySelector('#container');
  container.classList = response.current.is_day ? 'day' : 'night';

  const conditionText = document.querySelector('#outside-condition');
  conditionText.innerText = response.current.condition.text;
  conditionText.classList = response.current.is_day ? 'day' : 'night';

  const region = document.querySelector('#region');
  region.innerText = `${response.location.name}, ${response.location.region}`;
  region.classList = response.current.is_day ? 'day' : 'night';

  const tempDisplay = document.querySelector('#temp');
  tempDisplay.innerHTML = `${response.current.temp_f}&#8457;`;
  tempDisplay.classList = response.current.is_day ? 'day' : 'night';

  const feelsDisplay = document.querySelector('#feels-like');
  feelsDisplay.innerHTML = `Feels Like: ${response.current.feelslike_f}&#8457;`;
  feelsDisplay.classList = response.current.is_day ? 'day' : 'night';

  const humidity = document.querySelector('#humidity');
  humidity.innerText = `Humidity: ${response.current.humidity}%`;
  humidity.classList = response.current.is_day ? 'day' : 'night';

  const wind = document.querySelector('#wind-mph');
  wind.innerText = `Wind: ${response.current.wind_mph}MPH`;
  wind.classList = response.current.is_day ? 'day' : 'night';
}

const weatherForm = document.querySelector('#weather-form');
weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const search = document.querySelector('#search');

  getWeatherInfo(search.value);
});

getWeatherInfo('covington');
