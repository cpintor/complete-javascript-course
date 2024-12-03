'use strict';

/*************************************/
// 129. Default Parameters
/*************************************/

// const bookings = [];

// // ES6: Setting default values in argumment
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers // expressions and be used
// ) {
//   // ES5: setting numPassengers and price default
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000); // passing undefined to numPassengers

/*************************************/
// 130. How Passing Arguments Works: Value vs. Reference
/*************************************/
// JS only passes by value NOT by reference

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'Lh999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // It is the same as doing:
// // const flightNum = flight;
// // const passenger = jonas;

// // Will change person's passport
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

/*************************************/
// 131. First-Class and Higher-Order Functions
/*************************************/

// Lecture video: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648649#questions

/*************************************/
// 132. Functions Accepting Callback Functions
/*************************************/
// // Callback function
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// // Callback function
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // High-order function: takes in another function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transform string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// // Only passing value of upperFirstWord
// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// // Another example of using high5 as a callback function on addEventListener
// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);

// // Using high5 callback function again
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

/*************************************/
// 133. Functions Returning Functions
/*************************************/
// Function returning a new function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// // Caling the function greet() and passing 'Jonas' as the name
// greeterHey('Jonas');
// greeterHey('Steven');
// // Calling the returned function in a single line
// greet('Hello')('Jonas');

// // Challenge using arrow functions
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hi')('Jonas');

/*************************************/
// 134. The call and apply Methods
/*************************************/
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // Ehanced object literal syntax
//   book(flightNum, name) {
//     console.log(
//       // using this keyword which points to the lufthansa object itself
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// // New object
// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// // Storing book method from lufthansa object into book
// const book = lufthansa.book;
// // Does not work
// // book(23, 'Sara Williams');

// // Works
// // Setting eurowings as our this keyword, then all arguments are the
// // arguments of the original function
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// // Creating new airlines
// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// // Apply method - does no recieve a list of arguments
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData); // apply() is not used much in JS anymore
// console.log(swiss);

// // We can still use call() instead of apply() using spread operator
// book.call(swiss, ...flightData);

/*************************************/
// 134. The bind Method
/*************************************/
// Bind method
// Returns new this keyword that is bound - set to whatever value we pass into bind()
// book.call(eurowings, 23, 'Sarah Williams');
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Stevemn Williams');
// // Using bind to use one specific airline and flight #
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

// // Using bind with objects and event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   // Adding a new plane when clicking on button
//   this.planes++;
//   console.log(this.plane);
// };
// document.querySelector('.buy').addEventListener(
//   'click',
//   lufthansa.buyPlane.bind(lufthansa) //this keyword not points to lufthansa
// );

// // Partial application - presetting peramiters
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

/*************************************/
// CHALLENGE #1
/*************************************/
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
// };

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     // Printing both types of results
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll)); // using bind() so this keyword points to poll object

// // Extra
// // Using the call method to manually set this keyword to a new object
// poll.displayResults.call({ answers: [5, 2, 3] });

/*****************************************************/
// 137. Immedietly Invoked Function Expressions (IIFE)
/*****************************************************/
// // How we declare functions
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// // Executing a function immedeitly without saving it somewhere
// // Wrapping the function in parentheses and then calling it immedietly
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();
// console.log(isPrivate);

// // Same method being used for arrow functions
// (() => console.log('This will also never run again'))();

/*****************************************************/
// 138. Closures
/*****************************************************/

// // A closure makes a function remember all the variables
// // that existed at the function's birthplace
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// // Calling booker function which exectures the return function in secreBooking()
// booker(); // 1 passengers
// booker(); // 2 passengers
// booker(); // 3 passengers

// // Finding the closure of the function using console.dir()
// console.dir(booker);

/*****************************************************/
// 138. More Closure Examples
/*****************************************************/

// // Example 1
// let f;

// const g = function () {
//   const a = 23;
//   // f function born in g()
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   // then f function reborn in h()
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f); // a = 23

// // Re-assigning f function in h()
// h();
// f();
// console.dir(f); // b = 777

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are not boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} secods`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

/*****************************************************/
// 140. CHALLENGE #2
/*****************************************************/

/*
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!

2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
*/

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   // When the function fires, the callback function is attached to the body
//   // the IIFE is gone but the birth variables remain memory thanks to closure
//   // The callback function is also stored in memory and will be fired
//   // when the body is clicked
//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
