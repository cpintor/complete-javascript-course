'use strict';

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
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
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
