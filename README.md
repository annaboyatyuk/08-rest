[![Build Status](https://travis-ci.com/annaboyatyuk/08-rest.svg?branch=master)](https://travis-ci.com/annaboyatyuk/08-rest)



![cf](https://i.imgur.com/7v5ASc8.png) Lab 08: REST
======




## Links
* pr https://github.com/annaboyatyuk/08-rest/pull/1 
* travis https://travis-ci.com/annaboyatyuk/08-rest/builds/75820558
* heroku https://dashboard.heroku.com/apps/lab8rest


## Configuration 
use postman to test the GET PUT POST and DELETE 


## Tests
* write a test to ensure that your api returns a status code of 404 for routes that have not been registered
* write tests to ensure the `/api/simple-resource-name` endpoint responds as described for each condition below:
 * `GET`: test 404, it should respond with 'not found' for valid requests made with an id that was not found
 * `GET`: test 400, it should respond with 'bad request' if no id was provided in the request
 * `GET`: test 200, it should contain a response body for a request made with a valid id
 * `POST`: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
 * `POST`: test 200, it should respond with the body content for a post request with a valid body
