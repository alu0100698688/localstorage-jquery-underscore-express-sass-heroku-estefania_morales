var _ = require('underscore');
var $ = require('jquery');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
require('ejs').delimiter = '$';

var expressLayouts = require('express-ejs-layouts');
app.set('layout', 'layout'); // defaults to 'layout'  '

// Serve static files
app.use(express.static('.')); // http://expressjs.com/api.html#app.use#
app.use(expressLayouts);

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  res.render('index', {title: 'CSV separated values'});

});

app.post('/csv', function(req, res){
  var original = req.body.original;
  res.render('resultado', {original: original, title: 'Resultado'});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

module.exports = app;
