var fs = require("fs");
var filename = process.argv[2];
var buf = fs.readFileSync(filename);
var str = buf.toString();
var splitArr = str.split(RegExp(/\n/));

console.log(splitArr.length - 1);
