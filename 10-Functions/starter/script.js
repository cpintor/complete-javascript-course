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
