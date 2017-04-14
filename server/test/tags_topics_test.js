const app = require('../index.js');
const chai = require('chai');
const request = require('supertest');
const should = require('should');

const expect = chai.expect;



describe('/tags_topics tests: ', function() {

  it('should get topics linked with a tag', function(done) {
    request(app)
      .get('/tagstopics')
      .expect('Content-type', /json/)
      .expect(200, done);
  });

  it('should successfully add a topic tag entry', function(done) {
    request(app)
      .post('/tagstopics')
      .send({tag_id: 2, topic_id: 3})
      .expect(201, done);
  });
});


