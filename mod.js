var fs = require('fs');
var path = require('path');

function logDirExt(dir, ext, callback){
  fs.readdir(dir, function(err, list){
    if(err) return callback(err, null);

    var filt_arr = [];

    list.forEach(function(element){
      if (path.extname(element) === ('.' + ext))
        filt_arr.push(element); 
    });
     
    callback(null, filt_arr);
  });
}

module.exports = logDirExt;

