var fs = require('fs');
var lineReader = require('line-by-line');

var read_lines = new lineReader('football.dat');
var contents;
//var endOfLine = require('os').EOL;
var line_number = 0;
var current_line_array = [0,0,0];
var goal_spread;
var min_spread_team = "India";
var min_spread = 100;
	
read_lines
.on('line', function(line){
	if(++line_number > 1){
		console.log(line);
		current_line_array = line.split(/\s+/);//.map(returnVal);
	
		goal_spread = current_line_array[7] - current_line_array[9];
//		console.log("Line " + (line_number - 2) + " spread: " + goal_spread);

		if(goal_spread < min_spread){
			min_spread = goal_spread;
			min_spread_team = current_line_array[2];
		}	

		//print_array(current_line_array);
	}
})
.on('end', function(){
	console.log("Min Spread Team is: " + min_spread_team);
})

function print_array(array){
	for(var i=0; i < array.length; i++){
		console.log("Index" + i + " : " + array[i]);
	}
}

function returnVal(int_val){
//	if(int_val != 0){
		return int_val;
//	}
//	else{
//		return -1;
//	}		
}
