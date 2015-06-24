var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
  var req_pars = url.parse(req.url, true);  

  // get the actual iso time from query
  var given_time = req_pars.query.iso;
  //console.log(given_time);
  
  var form_time = new Date(given_time); 
  //console.log(form_time);  
  //console.log(form_time.getTime());  
  //console.log(form_time.getHours());  
  //console.log(form_time.getMinutes());  
  //console.log(form_time.getSeconds());  

  //identify the requirement, unixtime or parsetime
  if (req_pars.pathname.indexOf('unix') != -1) {
    res.end(JSON.stringify({ "unixtime" : form_time.getTime() }));
  } else {
    res.end(JSON.stringify(
      { "hour" : form_time.getHours(), 
        "minute" : form_time.getMinutes(),
        "second" : form_time.getSeconds()
    }));
  }
});

server.listen(process.argv[2]);
