const body = document.querySelector('.body');
const menu = document.querySelector('.header__menu');
const openMenuBtn = document.querySelector('.mobile-nav');
const closeMenuBtn = document.querySelector('.header__menu-btn');
const menuOptions = document.querySelectorAll('.header__menu-link');

const openMenu = () => {
  menu.classList.remove('close');
  menu.classList.add('open');
  body.classList.add('no-scroll');
};

const closeMenu = () => {
  menu.classList.remove('open');
  menu.classList.add('close');
  body.classList.remove('no-scroll');
};

openMenuBtn.addEventListener('click', () => {
  openMenu();
});

closeMenuBtn.addEventListener('click', () => {
  closeMenu();
});

menuOptions.forEach((option) => {
  option.addEventListener('click', () => {
    closeMenu();
  });
});

// Project details popup window

const projectButtons = document.querySelectorAll('.project-button');
const popupCancelBtn = document.querySelector('.project__details-cancel-icon');
const popup = document.querySelector('.project__details');
const popupfeatureImg = document.querySelector('.project__details-featured-image');
const popupTitle = document.querySelector('.project__feature-title');
const popupDescrption = document.querySelector('.project__details-description');
const popupTechList = document.querySelector('.project__details-languages');
const desktopView = window.matchMedia('(min-width: 64em');
