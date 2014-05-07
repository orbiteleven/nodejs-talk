var $ = require('jquery');
var io = require('socket.io-client');

var socket = io.connect('http://localhost:3000/');

function addMessage(msg, mine) {
  var $messages = $('.chat-messages');
  var $msg = $('<div>').addClass('alert').text(msg);
  if (mine) {
    $msg.addClass('alert-success');
  } else {
    $msg.addClass('alert-info');
  }
  $messages.append($msg);
  $messages.animate({
    scrollTop: $msg.offset().top
  }, 500);

}

socket.on('message', function (msg) {
  addMessage(msg);
});

$('.new-message').on('keyup', function (evt) {
  var code = evt.which;
  if (code == 13) {
    var msg = $(this).val();
    addMessage(msg, true);
    socket.emit('send', msg);
    $(this).val('');
  }
});
