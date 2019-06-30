
'use strict';
let index = require('../index');
let assert = require('assert');
let fixtures = require('./indexFixtures.js');

describe("Unit Tests", function() {
  describe("jeansOrShorts", function() {

    it("checks for shorts", function() {
      assert.equal(index.jeansOrShorts(fixtures.dataShorts), "shorts");
    });

    it("checks for jeans", function() {
      assert.equal(index.jeansOrShorts(fixtures.dataJeans), "jeans");
    });
  });

  describe("toCelcius", function() {

    it("checks for farenheight to celcius conversion", function() {
      assert.equal(index.toCelcius(50), "10.0");
    });
  });
});
