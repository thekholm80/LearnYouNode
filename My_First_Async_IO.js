var fs = require("fs");
var count = undefined;


fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  }
  count = data.split(RegExp(/\n/));
  console.log(count.length - 1);
});
