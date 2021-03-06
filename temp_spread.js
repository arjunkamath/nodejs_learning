var fs = require('fs');
var lineReader = require('line-by-line');

var read_lines = new lineReader('weather.dat');
var contents;
//var endOfLine = require('os').EOL;
var line_number = 0;
var current_line_array = [0,0,0];
var temp_spread;
var min_spread_index = 0;
var min_spread = 100;
	
read_lines
.on('line', function(line){
	if(++line_number > 2){
		console.log(line);
		current_line_array = line.split("  ").map(returnVal);
	
		temp_spread = current_line_array[2] - current_line_array[4];
		//console.log("Line " + (line_number - 2) + " spread: " + temp_spread);

		if(temp_spread < min_spread){
			min_spread = temp_spread;
			min_spread_index = current_line_array[1];
		}	

		//print_array(current_line_array);
	}
})
.on('end', function(){
	console.log("Min Spread Index is: " + min_spread_index);
})

function print_array(array){
	for(var i=0; i < array.length; i++){
		console.log(array[i]);
	}
}

function returnVal(int_val){
	if(int_val != 0){
		return int_val;
	}
	else{
		return -1;
	}		
}
