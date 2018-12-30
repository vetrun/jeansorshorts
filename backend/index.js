'use strict';
let express = require('express');
let moment = require('moment');
let request = require('request');

let PORT = process.env.PORT || 3000;
let DEST_URL = 'http://api.openweathermap.org/data/2.5/weather';

let app = express();

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
    res.json(body);
  });
});

app.listen(PORT, function() {
  console.log('JOS proxy listening on port %s.', PORT);
});