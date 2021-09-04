let fs = require("fs");
var xlsx = require('node-xlsx');

 var obj = xlsx.parse(__dirname + '/test.xlsx'); // parses a file

//  var obj = xlsx.parse(fs.readFileSync(__dirname + '/test.xlsx'));
fs.writeFileSync("data.txt",JSON.stringify(obj))

console.log(obj);