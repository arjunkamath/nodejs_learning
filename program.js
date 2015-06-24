var fs = require('fs');

var filename = process.argv[2];
//console.log(filename + '\n');

fs.readFile(filename, function(err, buffer){

  //if(err) console.log(err);

  var string = buffer.toString(); 
  var array = string.split('\n');
  var count = array.length - 1;
  console.log(count);

});

