var fs = require('fs');
var lineReader = require('line-by-line');
var helper_functions = require('./helper_functions.js');

var options = 
{ encoding: 'utf8',
  skipEmptyLines: false };

var NUM_OF_ENTRIES = 4;

var read_lines = new lineReader('pipe_dreams.txt', options);
var line_num = 0;
var parsed = helper_functions.create2DArray(4);
var output_lines = helper_functions.create2DArray(NUM_OF_ENTRIES);
//var line_2 = [0,0,0,0,0,0,0,0,0];

function parser(array, result){

    console.log('Parser called');

    for(var row = 0; row < 4; row ++) {
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

read_lines
.on('line', function(line){
    //console.log('Line number: ' + line_num);

    for (var j=0; j<27; j++){
        //console.log("char at " + line_num + "," + j + "is: " + line.charAt(j));
        parsed[line_num % 4][j] = line.charAt(j);
    }

    line_num++;

    if(line_num % 4 == 0){
        output_lines[Math.ceil(line_num/4)] = [0,0,0,0,0,0,0,0,0];
        parser(parsed, output_lines[Math.ceil(line_num/4)]);
        helper_functions.print_array(output_lines[Math.ceil(line_num/4)]);
    }



})
.on('end', function(){
    console.log("File read");

    //helper_functions.print_array(output_lines[0]);
    //helper_functions.print_array(output_lines[1]);
    //helper_functions.print_array(output_lines[2]);

})

