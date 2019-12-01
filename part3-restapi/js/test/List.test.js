const request = require('supertest');
const { app } = require('../server.js');

describe('GET /List', function() {
  it('return json response', function() {
    return request(app)
      .get('/List')
      .expect(200)
      .expect('Content-Type',/json/)
  })
})
