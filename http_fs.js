var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  var read = fs.createReadStream(process.argv[3]);  
  read.pipe(res);
});

server.listen(process.argv[2]);
