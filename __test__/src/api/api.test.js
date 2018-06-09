'use strict';

const superagent = require('superagent');
const app = require('./../../../src/app');

describe('app', () => {

  beforeAll( () => {
    app.start(3003);
  });
  afterAll( () => {
    app.stop();
  });

  it('should return id for GET /?id=foo', () => {
    return superagent
      .get('http://localhost:3003/api/v1/grapes?id=123')
      .then(data => {
        expect(data.text).toBe('ID: 123');
      });
  });

  it('should return 400 bad request when there is no query', () => {
    return superagent
      .get('http://localhost:3003/api/v1/grapes')
      .catch(err => {
        expect(err.response.text).toBe('Bad Request');
      });
  });


  it('should return 400 bad request when there is no body', () => {
    return superagent
      .post('http://localhost:3003/api/v1/grapes')
      .catch(err => {
        expect(err.response.text).toBe(`Bad Request (/api/v1/grapes)`);
        expect(err.status).toBe(400);
      });
  });

  it('should return body content for POST', () => {
    let object = {'dlskjfe':'sldkjfoei'};
    return superagent
      .post('http://localhost:3003/api/v1/grapes')
      .send(object)
      .then(data => {
        expect(data.text).toBe('{"dlskjfe":"sldkjfoei"}');
      });
  });


});


