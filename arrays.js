var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, number){
  return [number, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, number){
  return array.unshift(number);
}
function addElementToEndOfArray(array,number){
  return [...array, number];
}
