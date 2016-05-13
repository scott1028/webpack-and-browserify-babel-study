var lib01 = require('./lib/lib_01.js');
var lib02 = require('lib_02');  // in ./node_modules/lib_02.js, this is code convention.
var lib03 = require('jquery');  // like <script src="./jquery.js"></script> in html file

console.log(lib01.a);
console.log(lib02);
console.log(lib02.helpers.run());

console.log(lib03('window'));
console.log(lib03('body').text('hello webpack with jQuery'));
