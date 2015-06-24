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
  }
};
