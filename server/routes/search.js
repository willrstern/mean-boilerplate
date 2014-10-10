/**
 * Module dependencies
 */
var app     = require('../app');

// Search
app.get('/api/search/:str',
  function(req, res, next) {
    //do something here...say a 400 error
    res.send(400, {there:'be', problems:'matey'});
  }
);
