var http = require("http");
var url = process.argv[2];
var output = '';

http.get(url, function(response) {
  response.setEncoding('utf8');
  response.on('data', function(data) {
    output += data;
  });
  response.on('end', function() {
    console.log(output.length);
    console.log(output);
  });
});

/*
Official solution:

    var http = require('http')
    var bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })

*/
