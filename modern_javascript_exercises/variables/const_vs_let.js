// Instructions can be found in const_vs_let.md

function countThePeople() {
  let count = 0;
  let people = ["Barbara", "Jacob", "Angela", "Brangela"];
  people.forEach(() => (count += 1));
  return count;
}

 console.log("CountUsingLet" + countThePeople()); // <---- uncomment me!


