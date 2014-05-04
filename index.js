var express = require('express');
var hbs = require('express3-handlebars');

var app = express();

app.engine('hbs', hbs());
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
  res.render('home', {
    "projects": [
      "http://localhost:8080/projects/2014/05-04 June Bomba",
      "http://localhost:8080/projects/2013/08 Birthday Jasmine"
    ]
  });
});

app.get('/projects/:year/:id', function(req, res) {
  var data = require('./projects/' + req.params.year + '/' + req.params.id);
  res.render('project', data);
});

app.listen(process.env.PORT || 8080);
