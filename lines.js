var map = require('through2-map');
var split = require('split');

// if you pipe to split, transform gets one line at a time
process.stdin.
    pipe(split()).
    pipe(map(transform)).
    pipe(process.stdout);

var line_count = 0;

function transform(line) {
  //console.log(line_count + ":" +line);

  line_count++;

  if ((line_count % 2) === 1)
    return (line.toString().toLowerCase() + '\n');
  else
    return (line.toString().toUpperCase() + '\n');

}
