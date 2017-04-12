var a = require('./lib/lib1.js');
var b = require('./lib/lib2.js');
b.echo();

var d = require('./lib/lib1.js');
console.log(d.a);