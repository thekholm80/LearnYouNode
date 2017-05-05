var fs = require("fs");
var path = require("path");
var files = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(files, function(err, list) {
  if (err) {
    console.log(err);
  }
  list.forEach(function(item) {
    var temp = path.extname(item);
    if (temp === ext) {
      console.log(item);
    }
  });
})
