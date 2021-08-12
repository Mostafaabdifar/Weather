const form = document.getElementById('select-city')
const selectDropdown = document.querySelector('.city');
const sectionApi = document.querySelector('.api-section');

const key = 'c0b2fde154e22b98a8313be787127295';
const KELVIN = 273


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
      sectionApi.innerHTML = `<div class = "name-location">${name}</div> <div>${weather[0].description}</div> <div class="temp">${Math.floor(main.temp - KELVIN)}<sup>°C</sup></div>`
    })
    .then(function (data) {
      const temp = data.main[0];
      const weatherDes = data.weather[0].description;
      const nameCity = data.name;
    })

}



























// const getCity = async(city) => {
//   const url = `'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}'`
// }

// function instruction() {
//   fetch(url)
//     .then(response => response.json())
//   console.log
//     .then(data => {
//       const {
//         main,
//         name,
//         weather
//       } = data;

//     city.innerHTML = `<h3 class = "name-city">${name}</h3>`;
//   weatherCity.innerHTML = `<p class="status-weather">${weather[0]["description"]}</p>`;
//   degree.innerHTML = `${(main.temp)- 273}`;

//   switch (weatherCity){
//     case clouds:

//   }
// });

// }