////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const sect = document.querySelectorAll('.section');
const button = document.querySelector('.btn--text');
const view = document.querySelector('#section--2');
const but = document.querySelectorAll('.operations__tab');
const butdisplay = document.querySelectorAll('.operations__content');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const sliderright = document.querySelector('.slider__btn--right');
const sliderleft = document.querySelector('.slider__btn--left');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

sect.forEach(function (mod) {});

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

