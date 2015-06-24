var concat = require('concat-stream');

//process.stdin.
//  pipe(concat(reverse)).
//  pipe(process.stdout);

var str = 'India';
//console.log(str.reverse());

process.stdin.
  pipe(concat(reverse));

function reverse(body){
  console.log(body.toString().split('').reverse().join(''));
  /*
  var string = body.toString();
  var i;
  var rev_string = '';

  for (i = 1; i < string.length; i++) {
    rev_string += string[(string.length - i)];

    //console.log(rev_string);
    
    if(i === (string.length -1)){
      console.log(rev_string);
    }
  }

  //console.log(rev_string);
  */
}
