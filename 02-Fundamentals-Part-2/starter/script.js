// Section 3: JavaScript Fundamentals -- Part 2

/////////////////////////////////////////////////
// Activating Strict Mode
////////////////////////////////////////////////
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

///////////////////////////////////////////////
// Functions
//////////////////////////////////////////////

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

//   return juice;
// }

// // Printing out the function's return statement
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

///////////////////////////////////////////////
// Function Declarations vs. Expressions
//////////////////////////////////////////////

// Funtion declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age2);

///////////////////////////////////////////////
// Arrow Functions
//////////////////////////////////////////////

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// // When you have more than one argument, you
// // will need to add back the parentheses
// // as well as the brackets
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1993, 'Bob'));

///////////////////////////////////////////////
// Functions Calling Other Functions
//////////////////////////////////////////////
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

//   return juice;
// }

// console.log(fruitProcessor(2, 3));

///////////////////////////////////////////////
// Reviwing Functions
//////////////////////////////////////////////
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired.`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

///////////////////////////////////////////////
// Coding Exercise 5: CHALLENGE #1
//////////////////////////////////////////////
// const calcAverage = (firstScore, secondScore, thirdScore) => {
//   const average = (firstScore + secondScore + thirdScore) / 3;

//   return average;
// };

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgKoalas > 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else if (avgDolphins > 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else {
//     console.log('No team wins...');
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas);

///////////////////////////////////////////////
// 39. Introduction to Arrays
//////////////////////////////////////////////

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// // Size of array
// console.log(friends.length);
// // Get last item in array
// console.log(friends[friends.length - 1]);
// // Mutate array (replace)
// friends[2] = 'Jay';
// console.log(friends);

// // Array with different stuff
// const firstName = 'Jonas';
// const jonas = [firstName, 'Stuart', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// // Array exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

///////////////////////////////////////////////
// 40. Basic Array Operations (Methods)
//////////////////////////////////////////////

// const friends = ['Michael', 'Steven', 'Peter'];

// // Using push() method
// const newLength = friends.push('Jay'); // returns the length of the new array
// console.log(friends);
// console.log(newLength);

// // Using unshift() - adds elements to front of array
// friends.unshift('John');
// console.log(friends);

// // Using pop() - remove last element of the array
// friends.pop();
// console.log(friends);

// // Using shift() - removes first element of array
// friends.shift();
// console.log(friends);

// // indexof() - which position is an element on
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// // includes() - boolean check if element exists
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

///////////////////////////////////////////////
// 41. Coding Exercise 6: CHALLENGE #2
//////////////////////////////////////////////

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// // Testing calcTip function
// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);

///////////////////////////////////////////////
// 42. INTRODUCTION TO OBJECTS
//////////////////////////////////////////////

// // Object literal syntax
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Steven',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friennds: ['Michael', 'Peter', 'Steven'],
// };

///////////////////////////////////////////////
// 43. DOT VS. BRACKET NOTATION
//////////////////////////////////////////////

// // How retrieve data from objects
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Steven',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friennds: ['Michael', 'Peter', 'Steven'],
// };

// // 1. Dot-notation
// console.log(jonas.lastName);

// // 2. Bracket-notation
// console.log(jonas['lastName']);

// // Get first and last name
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // Access object property
// const interestedIn = prompt(
//   'What do you want to know about Jonas? Choose between firstName, lastName, age, and friends.'
// );
// // console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     'Wrong request! Choose between firstName, lastName, age, and friends.'
//   );
// }

// // Use dot and bracket notation to add new properties to the object
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonassteven';
// console.log(jonas);

// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael"
// console.log(
//   `${jonas.firstName} has ${jonas.friennds.length} friends, and his best friend is called ${jonas.friennds[0]}`
// );

///////////////////////////////////////////////
// 44. OBJECT METHODS
//////////////////////////////////////////////

// // Adding functions to objects
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Steven',
//   birthYear: 1991,
//   job: 'teacher',
//   friennds: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,
//   // function value similar to function expression
//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
//   // Using the this keyword - equal to object calling method
//   //   calcAge: function () {
//   //     console.log(this);
//   //     return 2037 - this.birthYear;
//   //   },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       jonas.job
//     }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//   },
// };

// // Calling function value with dot notation
// console.log(jonas.calcAge(1991));
// // Calling function value with bracket notation
// // console.log(jonas['calcAge'](1991));
// // Calling function using this
// console.log(jonas.calcAge());
// // Calling this.age
// console.log(jonas.age);

// // Challenge
// // "Jonas is a 46-year old teacher, and he has a driver's license."
// console.log(jonas.getSummary());

///////////////////////////////////////////////
// Coding Exercise 7: CHALLENGE #3
//////////////////////////////////////////////

/* Write your code below. Good luck! 🙂 */

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//   );
// }

///////////////////////////////////////////////
// 46. Iteration: The for Loop
//////////////////////////////////////////////

// for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

///////////////////////////////////////////////
// 47. Looping Arrays, Breaking and Continuing
//////////////////////////////////////////////

// const jonas = [
//   'Jonas',
//   'Steven',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   // Reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);

//   // Filling types array
//   // types[i] = typeof jonas[i];
//   // Another way to fill array
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // Continue and break loops
// // Using continue
// console.log('--- ONLY STRIGS ---');
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// // Using break
// // nothing will be printed after and item is of type number
// console.log('--- BREAK WITH NUMBER ---');
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;

//   console.log(jonas[i], typeof jonas[i]);
// }

///////////////////////////////////////////////
// 48. Looping Backwards and Loops in Loops
//////////////////////////////////////////////

// // Backwards Loop
// const jonas = [
//   'Jonas',
//   'Steven',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true,
// ];

// // Looping over an array backwards
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// // Loop inside of loop
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`----- Starting exercise ${exercise}`);

//   // This loop goes through all 5 iterations first
//   // and then the outter loop goes into second iteration
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
//   }
// }

///////////////////////////////////////////////
// 49. The While Loop
//////////////////////////////////////////////

// For loop as reference
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// While Loop
// Can only implement a condition and will
// run while the condition is true

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`);
//   rep++;
// }

// Example
// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end');
// }

///////////////////////////////////////////////
// Coding Exercise 8: CHALLENGE #4
//////////////////////////////////////////////

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  // inserting each bill and doing calcTip()
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);

// BONUS CHALLENGE
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
