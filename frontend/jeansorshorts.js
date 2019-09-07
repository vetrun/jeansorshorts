'use strict';

function geoSuccess(position) {
  getWeather(position.coords.latitude, position.coords.longitude);
}

function geoError() {
  getIpLocation();
}

function getIpLocation () {
  let url = new URL('https://jeansorshorts.com/api/geolocation');
  fetch(url)
    .then(
      function(response) {
        if (response.status !== 200) {
          document.getElementById('jeansOrShorts').innerHTML = '<h2>We cannot get any location data for you IP</h2>';
        }

        response.json().then(function(data) {
          getWeather(data.latitude, data.longitude);
        });
      }
    )
    .catch(function(err) {
      document.getElementById('jeansOrShorts').innerHTML = '<h2>Cannot connect to IP Geolocation API</h2>';
  });
}

function getWeather(lattitude, longitude) {

  let url = new URL('https://jeansorshorts.com/api'),
    params = {lat:lattitude, lon:longitude};

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

let geoOptions = {
  enableHighAccuracy: true,
  timeout: 10000,
};

navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
