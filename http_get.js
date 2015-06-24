var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var reply1, reply2, reply3;
var cb_count = 0;

get_reply(url1, function(reply){
  reply1 = reply;
});

get_reply(url2, function(reply){
  reply2 = reply;
});

get_reply(url3, function(reply){
  reply3 = reply;
});

function get_reply(url, cb){
  http.get(url, function(res){
    res.setEncoding('utf8');

    var reply = '';
    res.on('data', function(data){
      reply += data;      
    });

    res.on('end', function(){
      cb(reply);
      cb_count++;
      print_all();
    });
  });
}

function print_all()
{
  if (cb_count === 3) {
    console.log(reply1);
    console.log(reply2);
    console.log(reply3);
  }
}

