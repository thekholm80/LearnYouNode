var net = require("net");
var port = process.argv[2];
var server = net.createServer(function(socket) {
  socket.end(getTimeDate() + '\n');
});

function getTimeDate() {
  var date = new Date();

  return date.getFullYear() + '-'
    + addAZero(date.getMonth() + 1) + '-'
    + addAZero(date.getDate()) + ' '
    + addAZero(date.getHours()) + ':'
    + addAZero(date.getMinutes());
}

function addAZero(number) {
  if (number < 10) {
    return '0' + number;
  } else {
    return number;
  }
}

server.listen(port);

/*
Official solution:

    var net = require('net')

    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }

    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))

*/
