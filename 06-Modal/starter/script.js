'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
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

// Listerning for key events to close modal with ESC key
// Passing event (e) object when clicked as an argument
document.addEventListener('keydown', function (e) {
  // Checking if key is ESC and modal as .hidden class
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
