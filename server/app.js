
/**
 * Module dependencies.
 */

var express   = require('express');
var path      = require('path');
var app       = module.exports = express();

app.set('port', process.env.PORT || 3000);

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('7f3758f0b1dca9f71706bdd84dcd61af'));
app.use(express.cookieSession({cookie: {expires: new Date(Date.now()+10*365*24*60*60*1000)}})); //10 year expiration
app.use(express.favicon(path.join(__dirname, '../build/favicon.ico')));
app.use(express.compress());
app.use(express.static(path.join(__dirname, '../build')));
app.use(app.router);


require('./routes/api'); // some routes here
require('./routes/search'); // other routes here



app.get('/*', function(req, res, next) {
  if (req.xhr || path.extname(req.url)) {
    return next();
  }

  res.sendfile(path.resolve(__dirname + '/../build/index.html'));
});
