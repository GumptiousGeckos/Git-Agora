const app = require('../index.js');
const chai = require('chai');
const request = require('supertest');
const should = require('should');

const expect = chai.expect;



describe('/topics tests: ', function() {

  it('should successfully add a comment', function(done) {
    request(app)
      .post('/topics')
      .send({
  "user_id": 3,
  "title": "Food",
  "description": "Good Food",
  "link": "www.google.com",
  "type": "project"
})
      .expect(202, done);
  });
});



