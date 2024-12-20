'use strict';

/***********************************/
// 113. Enhanced Object Literals
/***********************************/
const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

// // Object literal
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // computing property names
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // Es6 enhanced object literals
  openingHours,
  // Making syntax easier by removing 'function' keyword
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Getting objects
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/******************************/
// 103. Destructuring Arrays
/******************************/
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // Destructuring the array as opposed to the a,b,c above
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// // Getting first and third elements from restaurant.categories
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables using temp variable
// // const temp = main; // storing 'Italian'
// // main = secondary; // Italian = Vegetarian
// // secondary = temp; // Vegetarian = Italian
// // console.log(main, secondary);

// // Switching variables using destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Recieve 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Destructure a nested array
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// // Destruct inner array
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

/******************************/
// 105. Destructuring Objects
/******************************/

// // Write exact property names to extract object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // Renaming variables
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Giving objects a default value
// // setting object to '[]'
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating (changing properties of the variable)
// // variables while destructuring objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// // Need to wrap destructuring assigment in parenthesis
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // Passing objects to function
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // Object with default values
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 2,
// });

/******************************/
// 106. The Spread Operator (...)
/******************************/

// // Manual way to add elements to array
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // Using spread operator
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// // Expanding the array
// console.log(...newArr);

// // Example 1
// // Building a new array from scratch by expanding array
// // and adding a new element to it
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Important use cases of spread operator
// // 1. Creating shallow copies of array
// const mainMenuCopy = [...restaurant.mainMenu];

// // 2. Merge two arrays together
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets but NOT objects

// // Using strings
// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);

// // Real world example
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);
// console.log(ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// // Making copy of the original restaurant
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/***********************************/
// 107. Rest Pattern and Parameters
/***********************************/

// // 1. DESTRUCTURING

// // SPREAD operator being used on the RIGHT side of equal sign
// const arr = [1, 2, ...[3, 4]];

// // REST pattern is when the spread operator is
// // used on the LEFT side of the equal sign
// // and places the variables into a separate array
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // Using REST pattern on both left and right sides of
// // equal sign
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// // Objects
// // Taking out Saturday to be it's own variable
// // and collecting the rest of the objects into a new obecjt, 'weekdays'
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2. FUNCTIONS
// // Rest syntax takes multiple values and pack them into an array
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [25, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

/***********************************/
// 108. Short Circuiting (&& and ||)
/***********************************/

// // Use any data type, return any data type,
// // short circuting
// console.log('---- OR ----');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas'); // '' is a false evaluation
// console.log(true || 0);
// console.log(undefined || null); // undefined is a false evaluation, therefore null is printed

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // prints Hello because Hello is the first TRUE value

// // Setting value to restaurant.numGuests so that it becomes true
// restaurant.numGuests = 23;

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); // returns 10 because restaurant.numGuests is empty

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('---- AND ----');
// // AND operator shortcircuits when the first value is false
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'Jonas'); // null is the first false evaluation

// // Practice example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/***********************************/
// 109. The Nullish Coalescing Operator (??)
/***********************************/

// restaurant.numGuests = 0;
// const guest = restaurant.numGuests || 10;
// console.log(guest);

// // ?? operator works with principle of nullish values
// // Nullish: null and undefined (not or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

/***********************************/
// 110. Logical Assignment Operators
/***********************************/

// const rest1 = {
//   name: 'Capri1',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovannu Rossi',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10; // Ecxactly the same as code above
// // rest2.numGuests ||= 10;

// // nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// CHALLENGE #1
// Game data
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2. The first player in any player array is the goalkeeper and the others are field
// // players. For Bayern Munich (team 1) create one variable ('gk') with the
// // goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

/***********************************/
// 112. Looping Arrays: The for-of Loop
/***********************************/

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // Loops over entire array
// for (const item of menu) console.log(item);

// // Getting index of array elements
// // Destructuring the item
// for (const [i, el] of menu.entries()) {
//   console.log(`${i[0] + 1}: ${el[1]}`);
// }

// // console.log([...menu.entries()]);

/***********************************/
// 114. Optional Chaining (?.)
/***********************************/
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // With conditional chaining
// // only if monday exists then open will be read, otherwise undefined
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// // Check if array is empty
// const users = [
//   {
//     name: 'Jonas',
//     email: 'hello@jonas.io',
//   },
// ];

// console.log(users[0]?.name ?? 'User array empty');

// // This is the equivalent of the code snipper above
// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');

/***********************************/
// 115. Looping Objects: Object Keys, Values, and Entries
/***********************************/

// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

/***********************************/
// Coding Challenge #2
/***********************************/

/* Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewand
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// const players = Object(game.scored.entries());

// for (const [i, player] of players) console.log(`Goal ${i + 1}: ${player}`);

// // 2.
// let average = 0;
// const odds = Object.values(game.odds);

// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team == 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

/***********************************/
// 117. Sets
/***********************************/

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// // All duplicates are gone
// console.log(ordersSet);

// // Strings are also iterable
// console.log(new Set('Jonas'));

// // Getting size of set
// console.log(ordersSet.size);

// // Check if a certain element is in a set
// console.log(ordersSet.has('Bread'));

// // Adding new elements to a set
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// // Iterating over sets
// for (const order of ordersSet) console.log(order);

// // Main use caase is to remove duplicate values of arrays
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// // Converting set to array using spread operator
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// // Getting size of set/array
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );
// // Counting how many letters are in a set
// console.log(new Set('jonasschmedtmann').size);

/***********************************/
// 118. Maps: Fundamentals
/***********************************/

// // Declaring new empty map
// const rest = new Map();
// rest.set('name', 'Classico Italiano'); // filling up map with sets
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lison, Lisbon');

// console.log(rest.set(2, 'Lisbon, Portugal')); // Updating the new map

// // Appending more sets to map
// rest
//   .set('categories', ['Italian', ' Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are openn')
//   .set(false, 'We are closed');

// // Printing map sets by calling key
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// // Boolean keys
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // Available methods in maps
// // Has method
// console.log(rest.has('categories'));
// rest.delete(2);

// // Clear
// // rest.clear();

// // Arrays and objects as map keys
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// // Size
// console.log(rest.size);

// console.log(rest.get(arr));

/***********************************/
// 119. Maps: Iteration
/***********************************/

// Preferred way of writting maps
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JS'],
//   ['correct', 3],
//   [true, 'Correct! 🎉'],
//   [false, 'Try again'],
// ]);

// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Iteration on Maps
// console.log(question.get('question'));
// // Destructuring map in for loop
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

/***********************************/
// 120. Summary: Which Data Structure to Use?
/***********************************/

// See notes: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648599#questions/16286450

/***********************************/
// CHALLENGE #3
/***********************************/

/*
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:

1. Create an array 'events' of the different game events that happened (no duplicates)

2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.

3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)

4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
*/

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1.
// const events = new Set([...gameEvents.values()]);
// console.log(events);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// // 4.
// for (const [min, value] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${value}`);
// }

/*************************************/
// 122. Working With Strings - Part 1
/*************************************/
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// // Getting chracters from string
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]); // getting position of characeter direecly from a string

// // METHODS
// // Reading length of string
// console.log(airline.length);
// console.log('B737'.length);
// // indexOf
// console.log(airline.indexOf('r'));
// console.log(airline.indexOf('Portugal'));
// // lastIndexOf
// console.log(airline.lastIndexOf('r'));
// // Slice
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// // Without hardcodig values
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// // Define negative begin argument
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// // Function that recieves airplane seat and logs to console
// // wether its a middle seat or now
// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
//   else console.log('You got lucky 😎');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

/*************************************/
// 123. Working With Strings - Part 2
/*************************************/
// const airline = 'TAP Air Portugal';

// console.log(airline.toLocaleLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = 'jOnAS';
// const passengerLower = passenger.toLocaleLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// // const lowerEmail = loginEmail.toLocaleLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // Replace parts of strings
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// // Replace all occurances of door and gate
// console.log(announcement.replaceAll('door', 'gate'));
// // Using regex
// console.log(announcement.replace(/door/g, 'gate'));

// // Boolean methods
// const plane = 'Airbus A320neo';
// // Does it include 'A320neo?
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the new Airbus family');
// }

// // Practice excercise
// const checkbaggage = function (items) {
//   const baggage = items.toLocaleLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };
// checkbaggage('I have a laptop, some Food and a pocket Knife');
// checkbaggage('Socks and camera');
// checkbaggage('Got some snacks and a gun for protection');

/*************************************/
// 124. Working With Strings - Part 3
/*************************************/

// // Splitting string into multiple parts using split()
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtamnn'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// // Using join()
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// // Capitalizing names
// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     // Another way to capitalize
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

// // Padding a string - to add a number of characters to a string
// // until it has a desired length
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// // Hiding some numbers/strings
// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(44553634345241223));
// console.log(maskCreditCard(2529042903723));
// console.log(maskCreditCard('2345243563453534534634'));

// // Repeat -repeat same string multiple times
// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

/*************************************/
// CHALLENGE #4
/*************************************/
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   // splitting string into array
//   const rows = text.split('\n');
//   console.log(rows);

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

/*************************************/
// 126. String Methods Practice
/*************************************/

// // Working with the flights variable
// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   // Destructuring
//   const [type, from, to, time] = flight.split(';');
//   // Formatting
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
//     '_',
//     ' '
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
//   console.log(output);
// }
