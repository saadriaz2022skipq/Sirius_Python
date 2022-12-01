const utils = require("lodash")
//import the lodash module


//Create a function to find a maximum value from number array.
function findMaxValue(arr) {
    let max_value = utils.max([arr]);
    return max_value
}  

//Create a function to return all values from numbers array 
//which are greater than the second parameter.​

function filterValues (arr, num) {
  return arr.filter(n => n > num);
}
//Create a function to return all values of employeeName array in capital letters.
function nameInCapital (arr){
  for (var i=0 ; i<arr.length; i++){
    arr[i] = arr[i].toUpperCase()

  }
  return arr
}
console.log(findMaxValue([1,2,34]))


module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
  
}
