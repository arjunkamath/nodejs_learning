module.exports = {
  create2DArray: function (rows) {
    var arr = [];

    for (var i=0;i<rows;i++) {
      arr[i] = [];
    }

    return arr;
  },
  print_array: function (array) {
    for(var i=0; i < array.length; i++){
        console.log(array[i]);
    }
  },
  add_array: function(array) {
    var sum = 0;
    for(var i=0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
  }
};
