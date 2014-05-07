var express = require('express')
  , path = require('path')
  , app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.render('index', { title: 'Example chat server' });
});

app.get('/about', function (req, res) {
  res.render('about');
});

var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  socket.emit('message', 'Chat server connected');

  socket.on('send', function (data) {
    console.log('Message received: ' + data);
    socket.broadcast.emit('message', data);
  });
});
