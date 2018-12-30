'use strict';

function geoSuccess(position) {
  let startPos = position;
  getWeather(startPos);
}

function geo_error() {
  document.getElementById('jeansOrShorts').innerHTML = "We can't find your location";
}

function getWeather(location) {

  let url = new URL('https://jeansorshorts.com/api'),
    params = {lat:location.coords.latitude, lon:location.coords.longitude};

  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  fetch(url)
    .then(
      function(response) {
        if (response.status !== 200) {
          document.getElementById('jeansOrShorts').innerHTML = "We can't get any weather data";
          return;
        }

        response.json().then(function(data) {
          console.log(data);
          jeansOrShorts(data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
  });
}

function jeansOrShorts(data) {
  let celcius = convertUnits(data.main.temp_max, "c");
  let fahrenheit = convertUnits(data.main.temp_max, "f");
  document.getElementById('currentWeather').innerHTML = `${celcius.toFixed(1)}°C  ${fahrenheit.toFixed(1)}°F`;

  if (data.main.temp_max < 295.15) {
    document.getElementById('jeansOrShorts').innerHTML = "Jeans";
  } else {
    document.getElementById('jeansOrShorts').innerHTML = "Shorts";
  }
}

function convertUnits(maxtemp, unit) {
  if (unit == "c") {
    maxtemp = maxtemp - 273.15;
  } else {
    maxtemp = maxtemp * 9/5 - 459.67;
  }
  return maxtemp;
}

navigator.geolocation.getCurrentPosition(geoSuccess, geo_error);

