'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  username: 'js',
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  username: 'jd',
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  username: 'stw',
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  username: 'ss',
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements, sort = false) {
  // Emptying movements container
  containerMovements.innerHTML = '';

  // Sorting
  // Creating a copy using slice()
  // if sort is true, then it'll sort, else display regular movements
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // Displaying movements
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    // Adding new child elements right after movement element
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// // Calculate the balance based on array
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event handlers
let currentAccount;
// Login btn
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});
// Trasnfer btn
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

// Get loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

// Close account btn
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // Delete account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// Sort button
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted; // flipping sort
});

/////////////////////////////////////////////////

/*****************************************************/
// 143. Simple Array Methods
/*****************************************************/
// SLICE
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2)); // getting last two elements of array
// console.log(arr.slice(-1)); // getting the last element of array
// console.log(arr.slice(1, -2)); // extracting a position 1, execept last two

// // Using slice method to create shallow copy of array
// console.log(arr.slice()); // using slice method
// console.log([...arr]); // using spread operator

// // SPLICE
// // console.log(arr.splice(2)); // splice takes part of the array and returns it
// arr.splice(-1); // mutates array
// console.log(arr);
// arr.splice(1, 2); // b and d are delated
// console.log(arr); // arr has remaining elements removed with splice

// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); // reverse the array and mutates it

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// // doing same thing with spread operator
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join('-'));

/*****************************************************/
// 144. The New at Method
/*****************************************************/
// const arr = [23, 11, 64];
// console.log(arr[0]);
// // Using at method
// console.log(arr.at(0)); // instead of using arr[0] we use at()

// // Getting last element of array
// console.log(arr[arr.length - 1]); // using old way
// console.log(arr.slice(-1)[0]); // using slice
// console.log(arr.at(-1)); // using at()

// // at() also works on strings
// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

/*****************************************************/
// 145. Looping Arrays: forEach
/*****************************************************/
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // Looping through array using for of loop
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('---forEach---');
// // Using forEach
// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });
// // 0: function(200)
// // 1: function(450)
// // 2: function(400)
// // ...

/*****************************************************/
// 146. forEach with Maps and Sets
/*****************************************************/

// forEach with a map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // forEach with a set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// // Key and value are the same
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

/*****************************************************/
// 148. Creating DOM Elements
/*****************************************************/
// Display movements from accounts
// const displayMovements = function (movements) {
//   // Emptying movements container
//   containerMovements.innerHTML = '';

//   movements.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';

//     // Displaying movements
//     const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//         <div class="movements__value">${mov}</div>
//       </div>
//     `;

//     // Adding new child elements right after movement element
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };
// displayMovements(account1.movements);

/*****************************************************/
// 149. Coding Challenge #1
/*****************************************************/

// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   // removing elements
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);

//   // For each remaining dog, log to the console whether it's an adult ("Dog number 1
//   // is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")
//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${dog} is still a puppy`);
//     }
//   });
// };

// // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/*****************************************************/
// 151. The map method
/*****************************************************/
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUSD = 1.1;

// // Using map method with callaback function
// // const movementsUSD = movements.map(function (mov) {
// //   return mov * euroToUSD;
// // });

// // Simplyfing by using arrow function
// const movementsUSD = movements.map(mov => mov * euroToUSD);

// console.log(movements); // orgional array was not mutated
// console.log(movementsUSD); // new array with new elements

// // Writing same thing using for of loop
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * euroToUSD);
// console.log(movementsUSDfor);

// // Map method has access to 3 parameters
// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptions);

/*****************************************************/
// 152. Computing Usernames
/*****************************************************/

// const user = 'Steven Thomas Williams';

// const createUsernames = function (accs) {
//   // Looping through each account
//   accs.forEach(function (acc) {
//     acc.userName = acc.owner
//       .toLowerCase()
//       .split(' ')
//       // Using map() to create a new array from user
//       .map(
//         name => name[0] //return first letter of each name
//       )
//       .join(''); // using join() to put together the letters
//   });
// };

// createUsernames(accounts);
// console.log(accounts);

/*****************************************************/
// 153. The filter method
/*****************************************************/
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // Using filter()
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(movements);
// console.log(deposits);

// // Using for of loop
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// // Using arrow function
// const withdrawals = movements.filter(mov => mov < 0);

// console.log(withdrawals);

/*****************************************************/
// 154. The reduce method
/*****************************************************/
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // Accumulator param is like a snowball
// // const balance = movements.reduce(function (acc, cur, i, arr) {
// //   console.log(`Iteration ${i}: ${acc}`);
// //   return acc + cur;
// // }, 0); // we start counting at 0

// // console.log(balance);

// // Using for of loop
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // Using arrow function
// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance);

// // Calculate the balance based on array
// const calcDisplayBalance = function (movements) {
//   const balance = movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${balance} EUR`;
// };

// calcDisplayBalance(account1.movements);

// // Maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]); // placing first value of array

// console.log(max);

/*****************************************************/
// 155. CHALLENGE #2
/*****************************************************/
/*
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4

2. Exclude all dogs that are less than 18 human years old (which is the same as
  keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know
  from other challenges how we calculate averages 😉)

4. Run the function for both test datasets

Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

//   return average;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

/*****************************************************/
// 156. The magic of chaining methods
/*****************************************************/

// const euroToUSD = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   // .map((mov) => mov * euroToUSD)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * euroToUSD;
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

/*****************************************************/
// 157. CHALLENGE #3
/*****************************************************/
/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!

Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

/*****************************************************/
// 158. The find method
/*****************************************************/

// find() returns the first element of the array
// that satisfies condition and not the entire array
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal); // prints out -400

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

/*****************************************************/
// 166. The New findLast amd findLastIndex Methods
/*****************************************************/
// console.log(movements);

// const lastWithdrawal = movements.findLast(mov => mov < 0); // finding last value that is less than 0
// console.log(lastWithdrawal);

// 'Your lastest large movement was x movements ago'
// const latestLargeMovementIndex = movements.findLastIndex(
//   mov => Math.abs(mov) > 1000
// );
// console.log(latestLargeMovementIndex);
// console.log(
//   `Your lastest large movement was ${
//     movements.length - latestLargeMovementIndex
//   } movements ago`
// );

/*****************************************************/
// 167. some and every
/*****************************************************/
// console.log(movements);
// // Equality
// console.log(movements.includes(-130));

// // Testing for a condition with some()
// console.log(movements.some(mov => mov === -130));
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// // Every
// // check if everything returns true
// console.log(movements.every(mov => mov > 0)); // returns false
// console.log(account4.movements.every(mov => mov > 0)); // returns true

// // Seperate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

/*****************************************************/
// 168. flat and flatpMap
/*****************************************************/
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat()); // removes nested array and flattens array

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat()); // flat() only goes one level deep and flattening arrays
// console.log(arrDeep.flat(2)); // flar(2) goes two levels deep to flatten array completely

// // const accountMovements = accounts.map(acc => acc.movements);
// // console.log(accountMovements);
// // const allMovements = accountMovements.flat(); // flattening all of the movements
// // console.log(allMovements);
// // const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0); // adding all movements
// // console.log(overalBalance);

// // Chaining all methods with flat()
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// // flatMap() combines flat() and map()
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

/*****************************************************/
// 169. CHALLENGE #4
/*****************************************************/

// Need to come back to this

/*****************************************************/
// 170. Sorting Arrays
/*****************************************************/

// // Sorting Strings
// const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
// console.log(owners.sort()); // Sorting alphametically by mutating org. array
// console.log(owners);

// // Sorting Numbers
// console.log(movements);

// // Need to use callback function in sort()
// // return < 0, A, B (keep order)
// // return > 0, B, A (switch order)

// // Ascending
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });
// // console.log(movements);

// // Simplifying
// // If a > b, then it'll return a positive number, it doesn't need to return 1
// movements.sort((a, b) => a - b);
// console.log(movements);

// // Descending
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });
// // console.log(movements);

// // Simplifying
// // If a < b, then it'll return a negative number, it doesn't need to return -1
// movements.sort((a, b) => b - a);
// console.log(movements);

/*****************************************************/
// 171. Array Grouping
/*****************************************************/
// console.log(movements);
// const groupMovements = Object.groupBy(movements, movement =>
//   movement > 0 ? 'deposits' : 'withdrawals'
// );
// console.log(groupMovements);

// const groupedByActivity = Object.groupBy(accounts, account => {
//   const movementCount = account.movements.length;

//   if (movementCount >= 8) return 'very active';
//   if (movementCount >= 4) return 'active';
//   if (movementCount >= 1) return 'moderate';
//   return 'inactive';
// });

// console.log(groupedByActivity);

// // const groupedAccounts = Object.groupBy(accounts, account => account.type);
// // console.log(groupedAccounts);

// // Simplified syntax
// const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);
// console.log(groupedAccounts);

/*****************************************************/
// 172. More Ways of Creating and Filling Arrays
/*****************************************************/

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// const x = new Array(7);
// console.log(x);
// // console.log(x.map(() => 5));

// // x.fill(1); // filling array with a value
// x.fill(1, 3, 5); // filling array between 3 and 5
// console.log(x);

// arr.fill(23, 2, 6); // filling array with 23 between 2 and 6
// console.log(arr);

// // Array.from()
// // Calling the array function and attaching it to the from function
// // Creating a function programatically
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// // Underscore means variable is not being used
// const z = Array.from({ length: 7 }, (_, i) => i + 1); // this callback function is like using map()
// console.log(z);

// // Getting balances
// // using Array.from() to create array from node list
// // Added mapping function to transform array
// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });
