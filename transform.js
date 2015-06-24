var through = require('through');
var map = require('through2-map');

var rw_stream = through(transform);

// rw_stream should be a read-write stream that calls to upper
//process.stdin.pipe(rw_stream).pipe(process.stdout);
process.stdin.pipe(map(change)).pipe(process.stdout);

//the transformation ie to upper
function transform(buff) {
  var string = buff.toString();
  this.queue(string.toUpperCase());
}

function change(buff) {
  return buff.toString().toUpperCase();
}
