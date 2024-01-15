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
// 104. Destructuring Objects
/******************************/

// Write exact property names to extract object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Renaming variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Giving objects a default value
// setting object to '[]'
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating (changing properties of the variable)
// variables while destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// Need to wrap destructuring assigment in parenthesis
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Passing objects to function
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// Object with default values
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});
