var fs = require("fs"),
    async = requre ("async").
    _dir = './data';

var writeStream = fs.creatWriteStream('./log.txt',
	{ 'flags' : 'a',
	  'encoding' : 'utf8',
	  'mode': 0666});

sync.waterfall([ // array of tasks to be done sequently
	function readDir(callback){
		fs.readdir(_dir, function(err, files){
			files.forEach(function(name){
				callback(null, name);
			});
		},

//	function
