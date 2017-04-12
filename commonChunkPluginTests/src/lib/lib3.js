module.exports = {
	a: 5,
	echo: function(){
		var c = require('./lib1.js');
		console.log(c.a);
	}
};