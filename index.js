var express = require('express')
  , path = require('path')
  , app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hello World' });
});

var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});
