const request = require('supertest');
const { app, deleteTestData } = require('../server.js');

describe('Post /Create', function() {
  it('returns 400 on missing body', function() {
    return request(app)
      .post('/Create')
      .expect(400)
  })
  it('returns 201 on success', function() {
    const testJson = { date:"test", type:"test", name: "test"};
    return request(app)
      .post('/Create')
      .send(testJson)
      .expect(201)
      .then(deleteTestData)
  })
})
