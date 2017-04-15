const app = require('../index.js');
const chai = require('chai');
const request = require('supertest');
const should = require('should');

const expect = chai.expect;



describe('/tags tests: ', function() {

  it('should successfully add a tag into DB', function(done) {
    request(app)
      .post('/tags')
      .send({tag_name: "Technology over everything"})
      .expect(201, done);
  });
});
