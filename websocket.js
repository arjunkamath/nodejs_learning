var ws = require('websocket-stream');
var stream = ws('ws://localhost:8000');
var fs = require('fs');

//var str = 'hello\n';

fs.createReadStream('hello.txt').pipe(stream);


