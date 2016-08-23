var lib01 = require('./lib/lib_01.js');
// var jquery = require('jquery');
// var lib02 = require('lib_02');  // in ./node_modules/lib_02.js, this is code convention.
// var lib03 = require('jquery');  // like <script src="./jquery.js"></script> in html file

console.log(lib01.a);
// console.log(lib02);
// console.log(lib02.helpers.run());

// console.log(lib03('window'));
// console.log(lib03('body').text('hello webpack with jQuery'));
console.log(31232444);
// console.log(jquery('div'));


function mainController(){
	var jquery = require('jquery');
	jquery('body').html('test text by jquery#1');
	main2Controller();
};

function main2Controller(){
	var jquery2 = require('jquery');
	jquery2('body').append('<div>test text by jquery#2</div>');
}

mainController();
