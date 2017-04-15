const app = require('../index.js');
const chai = require('chai');
const request = require('supertest');
const should = require('should');

const expect = chai.expect;



describe('/comments tests: ', function() {

  it('should get comments of a topic', function(done) {
    request(app)
      .get('/comments')
      .expect('Content-type', /json/)
      .expect(200, done);
  });

  it('should successfully add a comment', function(done) {
    request(app)
      .post('/comments')
      .send({user_id: 2, topic_id: 4})
      .expect(201, done);
  });
});



