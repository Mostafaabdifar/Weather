const form = document.getElementById('select-city')
const selectDropdown = document.querySelector('.city');
const sectionApi = document.querySelector('.api-section');
const msg = document.querySelector('.msg');
const KELVIN = 273;
const key = 'c0b2fde154e22b98a8313be787127295';

form.addEventListener('submit', e => {
  e.preventDefault();
  let city = selectDropdown.value;
  getSearchCity(city);
});

function getSearchCity(city) {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  fetch(api)
    .then(response => response.json())
    .then(data => {
      const {
        main,
        name,
        weather
      } = data;
      const desWeather = weather[0].description;

      function checkImg() {
        let pic;
        switch (desWeather) {
          case "clear sky":
            pic = 'sunny.svg';
            break;
          case "broken clouds":
            pic = 'clouds.svg';
            break;
          case "few clouds":
            pic = 'cloud.svg';
            break;
          case "scattered clouds":
            pic = 'cloud.svg';
            break;
          case "rain":
            pic = 'rain.svg';
            break;
        }
        return pic;
      }
      const icon = checkImg();

      /* we can use the following code for the icon section:
      const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
      <img class="shape-weather" src="${icon}" alt="alt=${weather[0]["main"]}">*/

      sectionApi.innerHTML = `<div class = "name-location"><span><i class="fa fa-map-marker"></i></span>${name}</div> <div class="description">${weather[0].description}</div> <div class="temp">${Math.floor(main.temp - KELVIN)}<sup>°C</sup></div> <img class="shape-weather" src="img/${icon}" alt="${weather[0]["main"]}">`
    })
    .catch(() => {
      msg.textContent = "Server Error!";
    });
}