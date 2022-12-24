const Work1 = document.querySelector('.work-1');

let firstData = [
  {
    id: 7,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    class: '',
    featuredImage: '../images/post-stories.png',
    linkToLiveVersion: 'https://ibranista.github.io/',
    linkToSource: 'https://github.com/Ibranista/ibrahim-portfolio',
  },
];

let firstWork = '';
let firstModal = '';

/* eslint-disable */
for (firstData of firstData) {
  const loop = firstData.technologies
    .map((language) => `<li class="lang-list">${language}</li>`)
    .join('');

  const firstElement = `<figure class="story-image">
  <img
    src=${firstData.featuredImage}
    alt="post story image"
    class="multi-post"
  />
</figure>
<article class="post-wrapper">
  <h2 class="work-description">${firstData.name}</h2>
  <p class="story-detail">
      ${firstData.description}
  </p>
  <ul class="langs">
${loop}
  </ul>
  <div class="btn multi-post">
    <button class="btn-project1" id=${firstData.id}>See Project</button>
  </div>
</article>`;

  firstWork += firstElement;

  // modal
  firstModal += `
 <div class="main-modal ${firstData.id}" id="main-modal1">
 <div class="top-wrapper">
   <div class="top-nav">
     <h1>${firstData.name}</h1>
     <svg class="modal-x"
       width="14"
       height="14"
       viewBox="0 0 14 14"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         fill-rule="evenodd"
         clip-rule="evenodd"
         d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
         fill="#67798E"
       />
     </svg>
   </div>
   <ul class="modal-langs">
   ${loop}
   </ul>
 </div>
 <div class="bottom-wrapper">
   <figure class="desktop-image">
     <img src=${firstData.featuredImage} alt="" srcset="" />
   </figure>
   <div class="modal-description">
     <p>${firstData.description}</p>
     <div class="modal-button-wrapper">
       <button class="btn">
       <a href=${firstData.linkToLiveVersion}>
         See Live
         <svg
           width="18"
           height="18"
           viewBox="0 0 18 18"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z"
             fill="white"
           />
         </svg>
         </a>
       </button>
       <button class="btn">
       <a href=${firstData.linkToSource}>  See Source
         <svg
           width="18"
           height="20"
           viewBox="0 0 18 20"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z"
             fill="white"
           />
         </svg>
         </a>
       </button>
     </div>
   </div>
 </div>
</div>
 `;
}
/* eslint-disable */

Work1.innerHTML = firstWork;

let data = [
  {
    id: 0,
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    class: 'card-2',
    featuredImage: '../images/card-1.png',
    linkToLiveVersion: 'https://ibranista.github.io/',
    linkToSource: 'https://github.com/Ibranista/ibrahim-portfolio',
  },
  {
    id: 1,
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    class: 'card-2',
    featuredImage: '../images/card-2.png',
    linkToLiveVersion: 'https://ibranista.github.io/',
    linkToSource: 'https://github.com/Ibranista/ibrahim-portfolio',
  },
  {
    id: 2,
    name: 'Website Portfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    class: 'card-3',
    featuredImage: '../images/card-3.png',
    linkToLiveVersion: 'https://ibranista.github.io/',
    linkToSource: 'https://github.com/Ibranista/ibrahim-portfolio',
  },
  {
    id: 3,
    name: 'Professional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    class: 'card-4',
    featuredImage: '../images/card-4.png',
    linkToLiveVersion: 'hthttps://ibranista.github.io/',
    linkToSource: 'https://github.com/Ibranista/ibrahim-portfolio',
  },
  {
    id: 4,
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    class: 'card-5',
    featuredImage: '../images/card-3.png',
    linkToLiveVersion: 'hthttps://ibranista.github.io/',
    linkToSource: 'https://github.com/Ibranista/ibrahim-portfolio',
  },
  {
    id: 5,
    name: 'Website Portfolio is coming',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    class: 'card-6',
    featuredImage: '../images/card-4.png',
    linkToLiveVersion: 'hthttps://ibranista.github.io/',
    linkToSource: 'https://github.com/Ibranista/ibrahim-portfolio',
  },
];

let works = '';
let modal = '';

// eslint-disable-next-line no-restricted-syntax
for (data of data) {
  const loop = data.technologies
    .map((language) => `<li class="lang-list">${language}</li>`)
    .join('');

  const element = `   <div class="work-2">
  <div class="desc-wrapper cards ${data.class}">
    <h2 class="work-description">${data.name}</h2>
    <p class="story-detail">
    ${data.description}
    </p>
    <ul class="langs">
${loop}
    </ul>
    <div class="btn">
      <button class="btn-project modal" id=${data.id}>See Project</button>
    </div>
  </div>
</div>`;

  works += element;

  const modalElement = `
 <div class="main-modal ${data.id}" id="main-modal">
 <div class="top-wrapper">
   <div class="top-nav">
     <h1>${data.name}</h1>
     <svg class="modal-x"
       width="14"
       height="14"
       viewBox="0 0 14 14"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         fill-rule="evenodd"
         clip-rule="evenodd"
         d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
         fill="#67798E"
       />
     </svg>
   </div>
   <ul class="modal-langs">
   ${loop}
   </ul>
 </div>
 <div class="bottom-wrapper">
   <figure class="desktop-image">
     <img src=${data.featuredImage} alt="" srcset="" />
   </figure>
   <div class="modal-description">
     <p>${data.description}</p>
     <div class="modal-button-wrapper">
       <button class="btn">
       <a href=${data.linkToLiveVersion}>
         See Live
         <svg
           width="18"
           height="18"
           viewBox="0 0 18 18"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z"
             fill="white"
           />
         </svg>
         </a>
       </button>
       <button class="btn">
       <a href=${data.linkToSource}>  See Source
         <svg
           width="18"
           height="20"
           viewBox="0 0 18 20"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z"
             fill="white"
           />
         </svg>
         </a>
       </button>
     </div>
   </div>
 </div>
</div>
 `;
  modal += modalElement;
}
const RecentWorks = document.querySelector('.project-wrapper');
RecentWorks.innerHTML = works;
const modalBackground = document.querySelector('#modal-background');
const modalBackground1 = document.querySelector('#modal-background1');
// modalBackground.insertAdjacentHTML("afterend", modal);
modalBackground.innerHTML = modal;
modalBackground1.innerHTML = firstModal;
// modal
const modalWrapper = document.querySelector('#modal-wrapper');
const mainModal = document.querySelectorAll('#main-modal');
const modalToggler = document.querySelectorAll('.btn-project');
const modalCloser = document.querySelectorAll('.modal-x');
const modalWrapper1 = document.querySelector('#modal-wrapper1');
const mainModal1 = document.querySelectorAll('#main-modal1');
const modalToggler1 = document.querySelectorAll('.btn-project1');
modalToggler.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const { id } = e.target;
    mainModal.forEach((item) => {
      if (!item.classList.contains(id)) {
        modalWrapper.classList.remove('modal-hide');
        item.classList.add('modal-hide');
      }
    });
  });
});
modalToggler1.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const { id } = e.target;
    mainModal1.forEach((item) => {
      if (item.classList.contains(id)) {
        modalWrapper1.classList.remove('modal-hide');
        // item.classList.add("modal-hide");
      }
    });
  });
});

modalCloser.forEach((item) => {
  item.addEventListener('click', () => {
    modalWrapper.classList.add('modal-hide');
    modalWrapper1.classList.add('modal-hide');
    mainModal.forEach((item) => {
      item.classList.remove('modal-hide');
    });
    mainModal1.forEach((item) => {
      item.classList.remove('modal-hide');
    });
  });
});

// script
/* eslint-disable linebreak-style */
const humMenu = document.querySelector('.hum-menu');
const navWrapper = document.querySelector('.nav-wrapper');
const sideNav = document.querySelector('.side-nav');
const navLinks = document.querySelectorAll('.nav-link');
const message = document.querySelector('.error');
const Toggler = (e) => {
  e.preventDefault();
  navWrapper.classList.toggle('active');
  sideNav.classList.toggle('hide');
};

humMenu.addEventListener('click', Toggler);

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    sideNav.classList.add('hide');
    navWrapper.classList.remove('active');
  });
}

// email validation
const userEmail = document.querySelector('#user-email');
const form = document.getElementById('getForm');
const { email } = form.elements;
const Name = document.querySelector('.Name');
const fullName = form.elements.fullname;
const textArea = document.querySelector('.textArea');
const textarea = form.elements.comment;
// Check email is valid
function checkEmail(input) {
  const re = /^[a-z]+$/g;

  if (re.test(input)) {
    message.innerHTML = '';
    form.submit();
  } else {
    message.innerHTML =
      ' email address should be written in small letters only!';
  }
}

// event listener

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let Email = email.value.replace(/[^a-zA-Z0-9 ]/g, '');
  Email = Email.replace(/[0-9]/g, '');
  checkEmail(Email);
});

const onChange = (e) => {
  e.preventDefault();
  localStorage.setItem('fname', fullName.value);
  localStorage.setItem('comment', textarea.value);
  localStorage.setItem('email', email.value);
};

const fName = localStorage.getItem('fname');
const Comment = localStorage.getItem('comment');
const Email = localStorage.getItem('email');

if (Name || Comment || Email) {
  fullName.value = fName;
  textarea.value = Comment;
  email.value = Email;
}

Name.addEventListener('change', onChange);
textArea.addEventListener('change', onChange);
userEmail.addEventListener('change', onChange);
