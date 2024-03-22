//function
const addTwo = num => {
  return (num * 8) / 2;
}
// function consistency output test 
const checkConsistentOutput = (func, val) => {
  let checkA = (val * 8) / 2;
  let checkB = func(val);
  return checkA === checkB ? func(val) : 'inconsistent results';  
}

console.log(checkConsistentOutput(addTwo, 29));