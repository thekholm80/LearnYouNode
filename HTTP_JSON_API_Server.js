var http = require('http');
var port = process.argv[2];
var url = require('url');

function getNormalTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function getUnixTime(time) {
  return {unixtime: time.getTime()};
}

function parseQuery(url) {
  if (url.pathname === '/api/parsetime') {
    return getNormalTime(new Date(url.query.iso));
  } else {
    return getUnixTime(new Date(url.query.iso));
  }
}

var server = http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  url = url.parse(request.url, true);
  response.end(JSON.stringify(parseQuery(url)));
});

server.listen(port);
