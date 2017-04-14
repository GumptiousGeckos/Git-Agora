const app = require('../index.js');
const chai = require('chai');
const request = require('supertest');
const should = require('should');

const expect = chai.expect;



describe('/follows tests: ', function(done) {

  it('should get the follows of a user', function(done) {
    request(app)
      .get('/follows')
      .expect('Content-type', /json/)
      .expect(201, done);
  });

  it('should add a follow for a user', function(done) {
    request(app)
      .post('/follows')
      .send({user_id: 2, type: 'project', type_id: 5})
      .expect(202, done);
  });

  it('should delete a follow of a user', function(done) {
    request(app)
      .delete('/follows')
      .send({user_id: 3, type: 'article', type_id: 1})
      .expect(202, done);
  });


})