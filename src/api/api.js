'use strict';

const router = require('../lib/router.js');

/**
 * GET Route (/)
 * Accepts an optional "name" query string parameter and says Hello
 * test with httpie:
 *     http http://localhost:8080
 *     http http://localhost:8080?name=John
 */
router.get('/', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  let name = req.query.name || '';
  res.write(`Hello ${name}`);
  res.end();
});


// router.get('/grape', (req, res) => {
//   res.statusCode = 200;
//   res.statusMessage = 'GRAPE';
//   res.write('its GGGRRRAAAAAPPE!');
//   res.end();
// });

// router.get('/api/v1/grapes', (req, res) => {
//   res.statusCode = 200;
//   res.write('all the grapes');
//   res.end();
// });

// router.get('/api/v1/grapes?id', (req, res) => {
//   res.statusCode = 200;
//   res.write('j;sldjfomisjcofisjoifjsoainfvoijiofsc \n one grape!');
//   res.end();
// });




router.get('/api/v1/grapes', (req, res) => {
  res.statusCode = 200;
  let message = `ID: ${req.query.id}`;
  res.write(message);
  res.end();
});


/**
 * POST Route (/data)
 * Accepts a JSON object and simply regurgitates it back to the browser
 * test with httpie:
 *     echo '{"title":"Go Home","content":"foobar"}' | http post http://localhost:8080/data
 */
router.post('/data', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write( JSON.stringify(req.body) );
  res.end();
});

module.exports = {};

