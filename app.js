var _ = require('underscore');
var $ = require('jquery');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
require('ejs').delimiter = '$';

app.get('/', function(req, res){
  res.render('index');

});

app.listen(5000, function(){
  console.log('Example app listening');
});

module.exports = app;
