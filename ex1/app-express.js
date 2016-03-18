var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.send({hello: 'world'});
});

app.post('/doSomething/:thing', function(req, res){
  var param = req.params.thing;

  res.send({param: param});
});

app.listen(3000);


