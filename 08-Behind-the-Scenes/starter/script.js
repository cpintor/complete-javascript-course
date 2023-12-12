'use strict';

/************/
// Scoping
/************/
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millennial = true; // var variables do not care about blocks
//       // Creating new variable with same name as outer score's variable
//       const firstName = 'Steven'; // JS tries to look for the variable closest to the current scopre

//       // Reassigning outer's score
//       output = 'NEW OUTPUT';

//       const str = `Oh, and you're a millennial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millennial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'John';
// calcAge(1991);

/************/
// Hoisting and TDZ
/************/

// Hoisting with variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas'; // never use var
// let job = 'teacher'; // use let if you will change the value later
// const year = 1991; // use const to declare most variables

// Hoisting with functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example
// if (!numProducts) {
//   deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted.');
// }

// var x = 1;
// let y = 2;
// const z = 3;

/************/
// The this keyword
/************/

// this keyword for Window object
// console.log(this);

// this keyword on a function expression
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // points to undefined, since points to its own this keyword
};

calcAge(1991); // results in undefined

// This keyword on an arrow function
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  //console.log(this); // points to window since its using the this function of it's parent scope, which is the global scope
};

calcAgeArrow(1980); // results in window

// this keyword on in an object
const jonas = {
  year: 1991,
  calcAge: function () {
    //console.log(this); // returns the "owner" of the method which is jonas object
    console.log(2037 - this.year);
  },
};

jonas.calcAge(); // jonas is the owner of the medthod

const matilda = {
  year: 2017,
};

// Performing "method borrowing" by assigning it from the jonas object
matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // results in 20

// Taking calcAge() out of jonas object and assigning it to variable f
const f = jonas.calcAge;
f();
