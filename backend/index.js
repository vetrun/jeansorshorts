'use strict';
let express = require('express');
let request = require('request');
let PORT = process.env.PORT || 3000;
let DEST_URL = 'http://api.openweathermap.org/data/2.5/weather';
let app = express();

function convertUnits(maxtemp, unit) {
  if (unit == 'c') {
    maxtemp = (maxtemp - 273.15).toFixed(1);
  } else {
    maxtemp = (maxtemp * 9/5 - 459.67).toFixed(1);
  }
  return maxtemp;
}

function jeansOrShorts(data) {
  if (data.main.temp_max < 295.15) {
    return 'jeans';
  } else {
    return 'shorts';
  }
}

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api', function(req, res) {
  let args = {
    lat: req.query.lat,
    lon: req.query.lon,
    appid: process.env.APIKEY
  };

  if (isNaN(args.lat) || isNaN(args.lon)) { return res.json('Not a number'); }

  request({url: DEST_URL, qs: args, json: true}, (err, response, body) => {
    if (err) { return res.json(err); }
    let celcius = convertUnits(body.main.temp_max, 'c');
    let fahrenheit = convertUnits(body.main.temp_max, 'f');
    let clothing = jeansOrShorts(body);
    res.json({ location: body.name, celcius: celcius, fahrenheit: fahrenheit, clothing: clothing });
  });
});

app.listen(PORT, function() {
  console.log('Jeans or Shorts API listening on port %s.', PORT);
});