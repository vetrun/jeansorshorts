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

function validateInput(lat, lon) {
  return (isNaN(lat) || isNaN(lon) ? false : true);
} 

function validateIp(ip) {  
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {  
    return (true);
  } 
  return (false);
}  

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://jeansorshorts.com');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api', function(req, res) {
  if (!validateInput(req.query.lat, req.query.lon)) { return res.status(500).send('Not a valid location'); }
  let DEST_URL = `https://api.darksky.net/forecast/${process.env.APIKEY}/${req.query.lat},${req.query.lon}?exclude=currently,minutely,hourly,alerts,flags`;

  request({url: DEST_URL, json: true}, (err, response, body) => {  
    if (err) { return res.status(500).send(err); }
    if (!body.daily) { return res.status(500).send('API Data Error'); }
    let celcius = toCelcius(body['daily']['data'][0]['temperatureHigh']);
    let fahrenheit = body['daily']['data'][0]['temperatureHigh'];
    let clothing = jeansOrShorts(body);
    res.json({ location: body.timezone, celcius: celcius, fahrenheit: fahrenheit, clothing: clothing });
  });
});

app.get('/api/geolocation', function(req, res) {
  let ip = req.headers['x-real-ip'];
  if (!validateIp(ip)) { return res.status(500).send('Not a valid IP'); }
  let DEST_URL = `https://get.geojs.io/v1/ip/geo/${ip}.json`;

  request({url: DEST_URL, json: true}, (err, response, body) => {  
    if (err) { return res.status(500).send(err); }
    if (!body.latitude || !body.longitude) { return res.status(500).send('API Data Error'); }
    res.json({ latitude: body.latitude, longitude: body.longitude });
  });
});

app.listen(PORT, function() {
  console.log('Jeans or Shorts API listening on port %s.', PORT);
});

//Exports for tests
const myModule = module.exports = app;
myModule.jeansOrShorts = jeansOrShorts;
myModule.toCelcius = toCelcius;