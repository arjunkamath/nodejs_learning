var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = '.' + process.argv[3];

function logArrayElements(element, index, array) {
  if(path.extname(element) == ext)
    console.log(element);
}

fs.readdir(dir, function(err, list){
  if(err) throw err;

  list.forEach(logArrayElements);

});
