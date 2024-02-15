/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of parameters
and returns a function.

The returned function will also accept any number of parameters and will
return a string including all of the parameters of smoothieMachine as well
as the returned function's parameters. Look at the examples for a guide of
how your return should be formatted!

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

const smoothieMachine = (...ingredients) => {
  // Your code here
  let string = "I'm having a smoothie with "
  let add = function(...parameters) {
    parameters.forEach(function(elem){
      ingredients.push(elem)
    })
    for(let i= 1; i<ingredients.length; i++){
      if (ingredients[i].indexOf('and') === -1) {
        ingredients[i] = "and "+ingredients[i]
      }
    }
    let var1 = ingredients.join(" ")
    return string+var1[0]+var1.slice(1)
  }
  return add;
}





/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  return null;
}
