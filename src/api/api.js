'use strict';

const router = require('../lib/router.js');


router.get('/', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  let name = req.query.name || '';
  res.write(`Hello ${name}`);
  res.end();
});

router.get('/api/v1/grapes', (req, res) => {
  const id = req.query.id;
  if(id) {
    res.statusCode = 200;
    res.write(`ID: ${id}`);
  }
  else{
    res.statusCode = 400;
    res.write('Bad Request');
  }
  res.end();
});

router.post('/api/v1/grapes', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write(JSON.stringify(req.body));
  res.end();
});

router.put('/api/v1/grapes', (req, res) => {
  const id = req.query.id;
  if(id) {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.write(JSON.stringify(req.body));
  }
  else {
    res.statusCode = 400;
    res.write('Bad Request');
  }
  res.end();
});

router.delete('/api/v1/grapes', (req, res) => {
  const id = req.query.id;
  if(id) {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.write(`ID: ${id} was deleted`);
  }
  else {
    res.statusCode = 400;
    res.write('Bad Request');
  }
  res.end();
});

