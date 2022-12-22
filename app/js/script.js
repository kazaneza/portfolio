const body = document.querySelector('.body');
const menu = document.querySelector('.header__menu');
const openMenuBtn = document.querySelector('.mobile-nav');
const closeMenuBtn = document.querySelector('.header__menu-btn');
const menuOptions = document.querySelectorAll('.header__menu-link');
const overlay = document.querySelector('.overlay');

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

const projectsArr = [
  {
    ctaId: '1',
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
    image: ['images/project1.png', 'images/multistories.png'],
    technologies: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
  {
    ctaId: '2',
    name: 'Project 2 title',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste consequatur vitae corporis velit. Officia, quo quam. Sit laudantium, nisi enim natus explicabo, odio architecto doloribus dolorem suscipit veritatis, asperiores numquam quia amet perferendis? Architecto obcaecati illum dolorum laudantium facilis totam sequi voluptas nulla quia. Quo, culpa! Soluta quam rem inventore.',
    image: ['images/project1.png', 'images/multistories.png'],
    technologies: ['Codekit', 'JavaScript', 'Codepen'],
  },
  {
    ctaId: '3',
    name: 'Project 3 title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam libero accusantium quibusdam quis, voluptatem rem deserunt, quod iste labore tenetur dolores officia natus eaque neque consequuntur necessitatibus nemo nostrum eos nulla quo dolore cumque dolor!',
    image: ['images/project1.png', 'images/multistories.png'],
    technologies: ['Github', 'Bootstrap', 'Terminal'],
  },
  {
    ctaId: '4',
    name: 'Project 4 title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reprehenderit possimus hic dolore unde fugit suscipit, voluptas dolorum nobis debitis.',
    image: ['images/project1-mobile.svg', 'images/project1-desktop.svg'],
    technologies: ['Github', 'JavaScript', 'Bootstrap', 'Terminal'],
  },
  {
    ctaId: '5',
    name: 'Project 5 title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas ut, maxime eos quos incidunt commodi aut libero explicabo enim laboriosam, similique quidem id ipsa. Harum reprehenderit iste ad officia beatae aperiam vel nisi nobis, dolorem nulla.',
    image: ['images/project2-mobile.svg', 'images/project2-desktop.svg'],
    technologies: ['Codekit', 'JavaScript', 'Terminal', 'Codepen'],
  },
  {
    ctaId: '6',
    name: 'Project 6 title',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, voluptatem aliquid. Omnis similique animi doloribus ipsam, incidunt excepturi explicabo esse voluptatum sit error, adipisci dolore ipsa praesentium beatae, fugit velit accusamus.',
    image: ['images/project3-mobile.svg', 'images/project3-desktop.svg'],
    technologies: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal'],
  },
  {
    ctaId: '7',
    name: 'Project 7 title',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, voluptatem aliquid. Omnis similique animi doloribus ipsam, incidunt excepturi explicabo esse voluptatum sit error, adipisci dolore ipsa praesentium beatae, fugit velit accusamus.',
    image: ['images/project3-mobile.svg', 'images/project3-desktop.svg'],
    technologies: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal'],
  },
];
// Open popup
const activatePopup = () => {
  popup.classList.remove('close');
  popup.classList.add('open');
  overlay.classList.add('open');
  overlay.classList.remove('close');
  overlay.style.zIndex = 1001;
};
// Close popup
const deactivatePopup = () => {
  popup.classList.remove('open');
  popup.classList.add('close');
  overlay.classList.remove('open');
  overlay.classList.add('close');
  overlay.style.zIndex = 999;
  popupTechList.innerHTML = '';
  popupfeatureImg.src = '';
};

projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activatePopup();

    // fill in text inside popup
    projectsArr.forEach((project) => {
      if (project.ctaId === button.id) {
        popupTitle.textContent = project.name;
        popupDescrption.textContent = project.description;
        project.technologies.forEach((tech) => {
          // Create an 'li' element containg an 'a' element with classes and name of technology.
          const techList = document.createElement('li');
          const techListLink = document.createElement('a');

          // Add classes and text(technology name) to 'a' element
          techListLink.className = 'project__details-language section__card-btn';
          techListLink.textContent = tech;

          // Add the 'li' into the 'ul' element
          techList.appendChild(techListLink);
          popupTechList.appendChild(techList);
        });

        const [mobile, desktop] = project.image;

        if (desktopView.matches) {
          popupfeatureImg.src = desktop;
        } else {
          popupfeatureImg.src = mobile;
        }
      }
    });
  });
});

popupCancelBtn.addEventListener('click', () => {
  deactivatePopup();
});
