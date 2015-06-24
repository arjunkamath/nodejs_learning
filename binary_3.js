var ar=[3,5,11,21,31,41,51,61,71,81,91];

function print_array(array){
	console.log("Array is: ");
	for (var i=0; i<array.length; i++){
		console.log(array[i] + '\t');
	}
}

//print_array(ar);

var outlier_correction = 0;

function make_small_array(big_array, start, stop){

	var small_array = big_array.slice(start, stop);

//	print_array(small_array);
	return small_array;
}


function chop(array_to_chop, target){
	
	outlier_correction = 0;
	var mid;
	var int_array= array_to_chop;
	var correction = 0;
	var target_index = 0;

	while(int_array.length >= 1) {
		if((int_array.length == 1) && (int_array[0] != target)){
			return -1;
		}

		target_index += correction;
		mid = Math.round((int_array.length - 1) * 0.5);

//		console.log("Target Index: " + target_index);
//		console.log("Correction: " + correction);
//		console.log("Mid: " + mid);

		if(target < int_array[mid]){
			int_array = make_small_array(int_array, 0, mid);
			correction = 0;
		} 
		else if (target > int_array[mid]) {
			int_array = make_small_array(int_array, mid, int_array.length);
			correction = mid;
		}
		else {
			return (mid + target_index);
		}
	} 
}

for (var i =0; i < ar.length; i++){
	console.log("index of " + ar[i] + " is " + chop(ar, ar[i]));
}

var test = 4;
console.log("index of " + test + " is " + chop(ar, test));
test = -45;
console.log("index of " + test + " is " + chop(ar, test));
test = 60;
console.log("index of " + test + " is " + chop(ar, test));
test = 205;
console.log("index of " + test + " is " + chop(ar, test));
