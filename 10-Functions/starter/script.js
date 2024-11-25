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
