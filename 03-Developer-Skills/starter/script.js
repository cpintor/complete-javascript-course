// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent
// task is this: "Given an array of temperatures of one day, calculate the
// temperature amplitude. Keep in mind that sometimes there might be a sensor error. "
*/

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// // 1. Understand the problem
// // - What is temp amplitude? Answer: difference between highest and lowest temp.
// // - How to compute max and min temps?
// // - What's a sensor error? and what to do?

// // 2. Breaking up into sub-problems
// // - How to do ignore errors?
// // - Find max value in temp array
// // - Find min value in temp array
// // - Substract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // PROBLEM 2:
// // Function should now recieve two arrays of temperatures

// // 1. Understand the problem
// // - With 2 arrays, should we implement functionality twice? NO! just merge the 2 arrays

// // 2. Breaking up into sub-problems
// // - Merge two arrays

// // Using contact() method
// // example
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

///////////////////////////////////////////////
// 61. Debugging with the Console and Breakpoints
//////////////////////////////////////////////

// FIRST BUG
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',
//     // C. FIX THE BUG
//     // value: Number(prompt('Degrees calcius:')),
//     value: 10,
//   };

//   // B. FIND THE BUG
//   console.log(measurement);
//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A. IDENTIFY BUG
// console.log(measureKelvin());

// // SECOND BUG, using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A. IDENBTIFY BUG
// console.log(amplitudeBug);

// ///////////////////////////////////////////////
// // 62. CODING CHALLENGE #1
// //////////////////////////////////////////////
// /*
// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]
// */

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = '';

//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}C in ${i + 1} days ...`;
//   }
//   console.log('... ' + str);
// };

// printForecast(data1);
