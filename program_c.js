var logDirExts = require('./mod.js');

var dir = process.argv[2];
var ext = process.argv[3];

logDirExts(dir, ext, function(err, array){
  if(err) throw err;

  array.forEach(function(element){
    console.log(element);
  });
});

