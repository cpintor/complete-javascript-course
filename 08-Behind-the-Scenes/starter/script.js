'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true; // var variables do not care about blocks
      // Creating new variable with same name as outer score's variable
      const firstName = 'Steven'; // JS tries to look for the variable closest to the current scopre

      // Reassigning outer's score
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millennial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'John';
calcAge(1991);
