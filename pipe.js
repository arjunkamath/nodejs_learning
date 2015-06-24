var fs = require('fs');

var input = fs.createReadStream('bb.js');

input.pipe('program.js');
