var fs = require('fs');
var lineReader = require('line-by-line');

var options = 
{ encoding: 'utf8',
  skipEmptyLines: false };

var read_lines = new lineReader('pipe_dreams.txt', options);
var line_num = 0;
var parsed = Create2DArray(8);
var line_1 = [0,0,0,0,0,0,0,0,0];
var line_2 = [0,0,0,0,0,0,0,0,0];

function parser(array, start_line, result){
    for(var row = start_line; row < (start_line + 4); row ++) {
        for(var col = 0; col < 27; col ++) {
            if( (row%4==0) && (col%3==1) && (array[row][col] == ' ')){
            //either 4 or 1
                if(array[row+1][col] == '_'){
                // it is a 4
                    assign_result(result, Math.floor(col/3), 4); 
                } else {
                    assign_result(result, Math.floor(col/3), 1); 
                } 
            } else if( (row%4==2) && (col%3==2) && (array[row][col] == ' ')){
		result[Math.floor(col/3)] = 2;  
            } else if( (row%4==1) && (col%3==2) && (array[row][col] == ' ')){
            //either 5 or 6
                if(array[row+1][col-2] == ' '){
                // it is a 5
                    assign_result(result, Math.floor(col/3), 5); 
                } else {
                    assign_result(result, Math.floor(col/3), 6); 
                }
            } else if((row%4==1) && (col%3==0) && (array[row][col] == ' ')){
             // either 3 or 7
                if(array[row][col+1] == '_'){
                    assign_result(result, Math.floor(col/3), 3); 
                } else {
                    assign_result(result, Math.floor(col/3), 7); 
                }             
            } else if((row%4==2) && (col%3==2) && (array[row][col] == '|')){
             // either 8 or 9
                if(array[row][col-2] == ' '){
                    assign_result(result, Math.floor(col/3), 9); 
                } else {
                    assign_result(result, Math.floor(col/3), 8); 
                }             
            }
        }
    }
}

function assign_result(result_array, index, val){
    if (result_array[index] == 0 ){
        result_array[index] = val;
    }
}

function print_line_array(line_array){
    console.log("Printing array");
    for(var i=0; i<line_array.length; i++){
        console.log(line_array[i]);
    }
}


function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}


read_lines
.on('line', function(line){
    console.log('Line number: ' + line_num);

    for (var j=0; j<27; j++){
        console.log("char at " + line_num + "," + j + "is: " + line.charAt(j));
        parsed[line_num][j] = line.charAt(j);
    }
    line_num++;
})
.on('end', function(){
    console.log("File read");

    print_line_array(line_1);
    print_line_array(line_2);

    parser(parsed, 0, line_1);
    parser(parsed, 4, line_2);

    print_line_array(line_1);
    print_line_array(line_2);

})

print_line_array(line_1);
    print_line_array(line_2);

    parser(parsed, 0, line_1);
    parser(parsed, 4, line_2);

    print_line_array(line_1);
    print_line_array(line_2);
