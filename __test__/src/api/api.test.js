'use strict';

const superagent = require('superagent');

describe('app', () => {
  it('should return id for GET /?id=foo', () => {

    // const expected = 'ID: 123';
    // actual = ???;

    // expect(actual).toBe(expected);

    superagent
      .get('http://localhost:3000/api/v1/grapes?id=123')
      .then(data => (console.log(data))
        .catch(err => console.log(err)));
  });
});


