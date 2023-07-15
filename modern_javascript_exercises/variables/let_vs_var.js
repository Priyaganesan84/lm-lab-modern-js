// Instructions can be found in let_vs_var.md

// Problems with var

function count() {
  for (let i = 0; i < 5; i++) {
    console.log(i + " inside the forLoop");
  }
  // for loop variable i is declared using let instead of var. 
  //The use of let gives i block scope, meaning it is only accessible within the for loop block.
  // Therefore, after the loop, when we try to access i outside of the loop,
  // a ReferenceError is thrown because i is not defined in that scope.
  // console.log(i + " outside the forLoop"); 

 count(); // <---- uncomment me!

// Another problem with var is that we can overwrite it, like this:

let greeting = "Hello 😘";
//var greeting = "Not today, pal! 😤"; // var allows for reassignment and 

console.log(greeting); // <----- uncomment me
}
