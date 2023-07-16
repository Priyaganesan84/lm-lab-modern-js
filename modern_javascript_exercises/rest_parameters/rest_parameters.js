// Instructions can be found in rest_parameters.md

// function add(a, b) {
//   // Add a loop here
//   return a + b;
// }


function add(... numbers)
{
  let sum = 0;
  for(let number of numbers)
  {
    sum += number;
  }
  console.log("-----------" + sum)
  return sum;
 }
 add(1, 2, 3, 4, 5);

  module.exports = add;
 
