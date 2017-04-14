const app = require('../index.js');
const chai = require('chai');
const request = require('supertest');
const should = require('should');

const expect = chai.expect;



describe('/messages tests: ', function() {

  it('should get the direct messages between users', function(done) {
    request(app)
      .get('/messages')
      .expect('Content-type', /json/)
      .expect(200, done);
  });

  it('should successfully add a message', function(done) {
    request(app)
      .post('/messages')
      .send({sender_id: 2, receiver_id: 4, content: 'Sup Bud'})
      .expect(201, done);
  });
});

