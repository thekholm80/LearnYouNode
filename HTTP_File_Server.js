var http = require("http");
var port = process.argv[2];
var fs = require('fs');
var location = process.argv[3];
var server = http.createServer(function(request, response) {
  fs.createReadStream(location).pipe(response);
});

server.listen(port);
