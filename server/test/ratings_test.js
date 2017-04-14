const app = require('../index.js');
const chai = require('chai');
const request = require('supertest');
const should = require('should');

const expect = chai.expect;



describe('/ratings tests: ', function() {

  it('should get ratings of a user', function(done) {
    request(app)
      .get('/ratings')
      .expect('Content-type', /json/)
      .expect(200, done);
  });

  it('should successfully add a user\'s ratings', function(done) {
    request(app)
      .post('/ratings')
      .send({user_id: 3, dev_points: 250, idea_points: 69})
      .expect(201, done);
  });
});