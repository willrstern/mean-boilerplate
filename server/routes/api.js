/**
 * Module dependencies
 */

var app      = require('../app');

/**
 * api routes
 */

// Google OAUTH login
app.get('/api/entries', function(req, res, next) {
  //do something here...say a 200 response
  res.send(200, {here:'be', some:'json'});
});
