const app = require('../index.js');
const chai = require('chai');
const request = require('supertest');
const should = require('should');

const expect = chai.expect;



describe('/favorites tests: ', function(done) {

  it('should get favorites of a user', function(done) {
    request(app)
      .get('/favorites')
      .expect('Content-type', /json/)
      .expect(201, done);
  });

  it('should add a favorite topic for a user', function(done) {
    request(app)
      .post('/favorites')
      .send({user_id: 2, topic_id: 4})
      .expect(202, done);
  });

  it('should delete a favorite of a user', function(done) {
    request(app)
      .delete('/favorites')
      .send({user_id: 2, topic_id: 4})
      .expect(202, done);
  });


})