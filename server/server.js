var app = require('./app');

module.exports = app.listen(app.get('port'), function() {
  console.log('\x1B[32m' + 'Express server listening on port ' + app.get('port') + '\x1B[39m');
});
