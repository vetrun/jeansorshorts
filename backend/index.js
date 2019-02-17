'use strict';
let express = require('express');
let request = require('request');
let PORT = process.env.PORT || 3000;
let app = express();

function toCelcius(maxtemp) {
  return (( maxtemp - 32) * 5/9).toFixed(1);
}

function jeansOrShorts(data) {
  if (data['daily']['data'][0]['temperatureHigh'] < 71.6) {
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
  if (isNaN(req.query.lat) || isNaN(req.query.lon)) { return res.json('Not a number'); }

  let DEST_URL = `https://api.darksky.net/forecast/${process.env.APIKEY}/${req.query.lat},${req.query.lon}?exclude=currently,minutely,hourly,alerts,flags`;

  request({url: DEST_URL, json: true}, (err, response, body) => {  
    if (err) { return res.json(err); }
    let celcius = toCelcius(body['daily']['data'][0]['temperatureHigh']);
    let fahrenheit = body['daily']['data'][0]['temperatureHigh'];
    let clothing = jeansOrShorts(body);
    res.json({ location: body.timezone, celcius: celcius, fahrenheit: fahrenheit, clothing: clothing });
  });
});

app.listen(PORT, function() {
  console.log('Jeans or Shorts API listening on port %s.', PORT);
});