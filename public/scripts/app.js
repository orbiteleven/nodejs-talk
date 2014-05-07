var $ = require('jquery');
var io = require('socket.io-client');

var socket = io.connect('http://localhost:3000/');

function addMessage(msg) {
  $('#chat-window ul').append($('<li>').text(msg));
}

socket.on('message', function (msg) {
  addMessage(msg);
});

$('#chat-window input').on('keyup', function (evt) {
  var code = evt.which;
  if (code == 13) {
    var msg = $(this).val();
    addMessage(msg);
    socket.emit('send', msg);
    $(this).val('');
  }
});
