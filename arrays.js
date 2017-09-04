var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, number){
  return [number, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, number){
  array.unshift(number);
  return array;
}
function addElementToEndOfArray(array,number){
  return [...array, number];
}
function destructivelyAddElementToEndOfArray(array, number){
  array.push(number);
  return array;
}
function accessElementInArray(array, number){
  return array[number];
}
