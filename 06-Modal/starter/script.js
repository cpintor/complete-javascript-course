'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btsOpenModal = document.querySelectorAll('.show-modal');

console.log(btsOpenModal);

// loop over btsOpenModal buttons
for (let i = 0; i < btsOpenModal.length; i++) {
  console.log(btsOpenModal[i].textContent);
}
