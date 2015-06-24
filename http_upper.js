var map = require('through2-map');
var http = require('http');

var server = http.createServer(function(req, res){
  if(req.method == 'POST'){
    req.pipe(map(toUpper)).pipe(res);
  }
});

server.listen(process.argv[2]);

function toUpper(buf){
  var str = buf.toString();
  return str.toUpperCase();
}
