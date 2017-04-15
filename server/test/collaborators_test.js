const app = require('../index.js');
const chai = require('chai');
const request = require('supertest');
const should = require('should');

const expect = chai.expect;



describe('/collaborators tests: ', function() {

  it('should get collaborators of a topic', function(done) {
    request(app)
      .get('/collaborators')
      .expect('Content-type', /json/)
      .expect(200, done);
  });

  it('should successfully add a collaborator', function(done) {
    request(app)
      .post('/collaborators')
      .send({user_id: 2, topic_id: 4})
      .expect(201, done);
  });
});

