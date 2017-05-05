var l6Mod = require("./lesson6mod");
var directory = process.argv[2];
var ext = process.argv[3];

var callback = function (err, list) {
  if (err) throw err;
  list.forEach(function(file) {
    console.log(file);
  });
};

l6Mod(directory, ext, callback);
