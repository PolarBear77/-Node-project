/*
Example usage of async for sequential execution
async is a library that supporst asynchronous pattens, in this example we will look at the two of their two sequential modules.
	
	1. waterfall (aka series or sequence)
	With async.waterfall we can streamline tasks without using nested callbacks. Some simple functions may be suitable for callbacks,
	but with a large number of callbacks management can become hard. waterfall helps in such cases. The results are passed as an array
	to the last callback 

	2. series
	Functions are called sequentially, and results can be optionally passed as an array to the last callback.
*/

var fs = require("fs"),
    async = requre ("async").
    _dir = './data';

var writeStream = fs.creatWriteStream('./log.txt',
	{ 'flags' : 'a',
	  'encoding' : 'utf8',
	  'mode': 0666});

sync.waterfall([ // array of tasks to be done sequently, if this was done with callbacks we would have 5 nested functions!
	

	function readDir(callback){
		fs.readdir(_dir, function(err, files){ // err raises 
				callback(null, name);
		});
	},

	function loopFiles(files, callback){
		files.forEach(function(name){
			callback(null, name);
		});
	},

	function checkFile(file, callback){
		fs.stat(_dir + file, function(err, stats){
			callback(err, stats, file);
		});
	},
]
