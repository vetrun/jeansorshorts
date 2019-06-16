'use strict';
let request = require('supertest');
let chai = require('chai');
let expect = chai.expect;
let app = require('../index');

describe('API Integration Tests', function() {
  describe('#GET / api', function() { 
    it('should get an error due to no input', function(done) { 
      request(app) .get('/api')
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(500); 
          expect(res.text).to.equal('Not a number');
          done(); 
        }); 
    });
  });

  describe('#GET / api', function() { 
    it('should return valid live data', function(done) { 
      request(app) .get('/api?lat=-37.75&lon=145')
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(200); 
          expect(res.body.location).to.equal('Australia/Melbourne');
          done(); 
        }); 
    });
  });

});