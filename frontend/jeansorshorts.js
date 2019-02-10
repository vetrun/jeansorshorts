'use strict';

function geoSuccess(position) {
  let startPos = position;
  getWeather(startPos);
}

function geo_error() {
  document.getElementById('jeansOrShorts').innerHTML = '<h2>We cannot find your location</h2>';
}

function getWeather(location) {

  let url = new URL('https://jeansorshorts.com/api'),
    params = {lat:location.coords.latitude, lon:location.coords.longitude};

  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  fetch(url)
    .then(
      function(response) {
        if (response.status !== 200) {
          document.getElementById('jeansOrShorts').innerHTML = '<h2>We cannot get any weather data</h2>';
          return;
        }

        response.json().then(function(data) {
          jeansOrShorts(data);
        });
      }
    )
    .catch(function(err) {
      document.getElementById('jeansOrShorts').innerHTML = '<h2>Cannot connect to API</h2>';
  });
}

function jeansOrShorts(data) {
  document.getElementById('location').innerHTML = `${data.location}`;
  document.getElementById('currentWeather').innerHTML = `${data.celcius}°C / ${data.fahrenheit}°F`;
  document.getElementById('jeansOrShorts').innerHTML = `<img src='images/${data.clothing}.jpg'/>`;
}

navigator.geolocation.getCurrentPosition(geoSuccess, geo_error);

