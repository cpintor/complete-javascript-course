'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button clicked');
  // using classList to get .hidden class
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// loop over btsOpenModal buttons
// open model when clicking buttons
for (let i = 0; i < btsOpenModal.length; i++) {
  btsOpenModal[i].addEventListener('click', openModal);
}

// Ability to close modal and remove overlay
// closeModal function is only triggered when the click event fires
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
