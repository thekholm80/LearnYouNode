var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, function(err, list) {
    if (err) return callback(err);
    else {
      list = list.filter(function (file) {
        if(path.extname(file) === '.' + ext) return true;
      });
      return callback(null, list);
    }
  });
};
